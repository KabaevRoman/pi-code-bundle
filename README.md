# pi-code-bundle

Install the full pi-code suite through one package. The bundle activates context, file tools, hooks, integrations, memory, permissions, planning, prompts and skills, session UI, subagents, and tasks. It contains no copied runtime or prompt assets.

Install with:

```sh
pi install npm:pi-code-bundle
```

Individual extensions remain independently installable. Installing the bundle alongside individual extensions does not register a feature twice. All dependencies are pinned to version `0.5.0` and share `pi-code-core`.

Publish in this order: `pi-code-core`, the individual extension packages, then `pi-code-bundle`. This package name was selected because `pi-code` belongs to another publisher.

For local development, include this repository as `bundle/` in the sibling-repository workspace, build core, then run `npm test` and `npm run typecheck` from the workspace root.

## Publishing to npm

The `.github/workflows/publish.yml` workflow publishes this package when a tag is
pushed. Add a repository Actions secret named `NPM_TOKEN` containing an npm token
with publish access (and permission to bypass 2FA for automated publishing).

Update `package.json` to the release version, commit the change, then push a
matching tag, for example:

```sh
git tag v0.5.0
git push origin v0.5.0
```

Tags must equal the package version, optionally prefixed with `v`. The workflow
installs dependencies, builds if needed, typechecks, and runs available tests
before publishing. Stable versions use the `latest` npm dist-tag; prerelease
versions use `next`. Each version can only be published once.

Publish matching dependency versions first: `pi-code-core`, then the individual
extensions, then `pi-code-bundle`.
