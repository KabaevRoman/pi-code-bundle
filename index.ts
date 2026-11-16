import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { shared } from '@pi-ko/core';
import context from '@pi-ko/context/index.ts';
import files from '@pi-ko/file-tools/index.ts';
import hooks from '@pi-ko/hooks/index.ts';
import integrations from '@pi-ko/integrations/index.ts';
import memory from '@pi-ko/mem/index.ts';
import permissions from '@pi-ko/permissions/index.ts';
import planning from '@pi-ko/planning/index.ts';
import prompts from '@pi-ko/prompts-skills/index.ts';
import ui from '@pi-ko/session-ui/index.ts';
import agents from '@pi-ko/subagents/index.ts';
import tasks from '@pi-ko/tasks/index.ts';

/** Activate the complete extension suite through the shared core runtime. */
export default function(pi: ExtensionAPI): void {
  shared(pi);
  context(pi);
  files(pi);
  hooks(pi);
  integrations(pi);
  memory(pi);
  permissions(pi);
  planning(pi);
  prompts(pi);
  ui(pi);
  agents(pi);
  tasks(pi);
}
