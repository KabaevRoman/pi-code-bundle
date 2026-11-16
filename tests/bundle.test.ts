import { test } from 'node:test';
import assert from 'node:assert/strict';
import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import install from '../index.ts';
import hooks from '@kabaevroman/pi-code-hooks/index.ts';
import integrations from '@kabaevroman/pi-code-integrations/index.ts';

function api() {
  const listeners = new Map<string, Set<(value: any) => void>>();
  const handlers = new Map<string, any[]>();
  const tools = new Map<string, any>();
  const commands = new Map<string, any>();
  const pi = {
    events: {
      emit(name: string, value: any) { for (const fn of listeners.get(name) ?? []) fn(value); },
      on(name: string, fn: (value: any) => void) {
        if (!listeners.has(name)) listeners.set(name, new Set());
        listeners.get(name)!.add(fn);
        return () => { listeners.get(name)?.delete(fn); };
      },
    },
    on(name: string, handler: any) { handlers.set(name, [...(handlers.get(name) ?? []), handler]); },
    registerTool(tool: any) { assert.ok(!tools.has(tool.name), `duplicate tool: ${tool.name}`); tools.set(tool.name, tool); },
    registerCommand(name: string, value: any) { assert.ok(!commands.has(name), `duplicate command: ${name}`); commands.set(name, value); },
    getAllTools() { return [...tools.values()]; },
    getActiveTools() { return [...tools.keys()]; },
  };
  return { pi: pi as unknown as ExtensionAPI, handlers, tools, commands };
}

for (const individualFirst of [false, true]) {
  test(`bundle activates all features once, individuals ${individualFirst ? 'before' : 'after'}`, async () => {
    const h = api();
    if (individualFirst) { hooks(h.pi); integrations(h.pi); }
    install(h.pi);
    install(h.pi);
    hooks(h.pi);
    integrations(h.pi);
    for (const name of ['Read', 'Edit', 'TaskCreate', 'EnterPlanMode']) assert.ok(h.tools.has(name), name);
    for (const name of ['compat', 'cc-prompt', 'cc-integrations']) assert.ok(h.commands.has(name), name);
    let state: any;
    h.pi.events.emit('pi-claude-compat:runtime:v2', { accept(value: any) { state = value; } });
    assert.equal(state.features.size, 12);
    const results = await Promise.all((h.handlers.get('before_agent_start') ?? []).map(fn => fn({
      systemPromptOptions: { contextFiles: [], skills: [], appendSystemPrompt: '', sections: {}, promptGuidelines: [], toolGuidelines: {} },
    }, { cwd: process.cwd(), model: { provider: 'test', id: 'test' } })));
    assert.equal(results.filter(result => result?.systemPrompt).length, 1);
    assert.equal(results.filter(result => result?.message).length, 0);
  });
}
