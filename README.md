# pi-code-bundle

Install the full pi-code suite through one package. The bundle activates context, file tools, hooks, integrations, memory, permissions, planning, prompts and skills, session UI, subagents, and tasks. It contains no copied runtime or prompt assets.

Install with:

```sh
pi install npm:pi-code-bundle
```

Individual extensions remain independently installable. Installing the bundle alongside individual extensions does not register a feature twice. All dependencies are pinned to version `0.5.0` and share `pi-code-core`.

Publish in this order: `pi-code-core`, the individual extension packages, then `pi-code-bundle`. This package name was selected because `pi-code` belongs to another publisher.

For local development, include this repository as `bundle/` in the sibling-repository workspace, build core, then run `npm test` and `npm run typecheck` from the workspace root.
