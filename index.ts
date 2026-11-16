import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import context from '@kabaevroman/pi-code-context/index.ts';
import files from '@kabaevroman/pi-code-file-tools/index.ts';
import hooks from '@kabaevroman/pi-code-hooks/index.ts';
import integrations from '@kabaevroman/pi-code-integrations/index.ts';
import memory from '@kabaevroman/pi-code-mem/index.ts';
import permissions from '@kabaevroman/pi-code-permissions/index.ts';
import planning from '@kabaevroman/pi-code-planning/index.ts';
import prompts from '@kabaevroman/pi-code-prompts-skills/index.ts';
import ui from '@kabaevroman/pi-code-session-ui/index.ts';
import agents from '@kabaevroman/pi-code-subagents/index.ts';
import tasks from '@kabaevroman/pi-code-tasks/index.ts';

/** Activate the complete extension suite through the shared core runtime. */
export default function(pi: ExtensionAPI): void {
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
