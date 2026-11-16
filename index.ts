import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import context from 'pi-code-context/index.ts';
import files from 'pi-code-file-tools/index.ts';
import hooks from 'pi-code-hooks/index.ts';
import integrations from 'pi-code-integrations/index.ts';
import memory from 'pi-code-mem/index.ts';
import permissions from 'pi-code-permissions/index.ts';
import planning from 'pi-code-planning/index.ts';
import prompts from 'pi-code-prompts-skills/index.ts';
import ui from 'pi-code-session-ui/index.ts';
import agents from 'pi-code-subagents/index.ts';
import tasks from 'pi-code-tasks/index.ts';

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
