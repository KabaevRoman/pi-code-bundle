# @pi-ko/bundle

Install the full pi-code suite through one package. The bundle activates context, file tools, hooks, integrations, memory, permissions, planning, prompts and skills, session UI, subagents, and tasks. It contains no copied runtime or prompt assets.

Install with:

```sh
pi install npm:@pi-ko/bundle
```

Individual extensions remain independently installable. Installing the bundle alongside individual extensions does not register a feature twice. Dependencies are pinned to their latest release tags and share `@pi-ko/core`.

Publish in this order: `@pi-ko/core`, the individual extension packages, then `@pi-ko/bundle`.

For local development, include this repository as `bundle/` in the sibling-repository workspace, build core, then run `npm test` and `npm run typecheck` from the workspace root.

## Publishing to npm

The `.github/workflows/publish.yml` workflow publishes this package to the public
npm registry when a tag is pushed. It authenticates with the repository secret
`NPM_TOKEN`, an npm automation or granular token that may publish the
`@pi-ko` scope. Enable GitHub Actions in this repository.

Update `package.json` to the release version, commit it, then push a matching tag:

```sh
git tag v0.6.1
git push origin v0.6.1
```

Tags must equal the package version, optionally prefixed with `v`. The workflow
installs dependencies, builds if needed, typechecks, and runs available tests
before publishing. Stable versions use `latest`; prereleases use `next`.
Each version can only be published once.

Publish matching dependency versions in order: `@pi-ko/core`, then
the individual extensions, then `@pi-ko/bundle`. Packages are
published with public access, so dependents install from the public registry
without cross-repository access setup.

## Installing from npm

The committed `.npmrc` routes `@pi-ko` packages to the public npm registry and
leaves other packages on the default registry. The packages are public, so
installing them needs no authentication. Install using the full scoped package
name.
