# @kabaevroman/pi-code-bundle

Install the full pi-code suite through one package. The bundle activates context, file tools, hooks, integrations, memory, permissions, planning, prompts and skills, session UI, subagents, and tasks. It contains no copied runtime or prompt assets.

Install with:

```sh
pi install npm:@kabaevroman/pi-code-bundle
```

Individual extensions remain independently installable. Installing the bundle alongside individual extensions does not register a feature twice. All dependencies are pinned to version `0.5.0` and share `@kabaevroman/pi-code-core`.

Publish in this order: `@kabaevroman/pi-code-core`, the individual extension packages, then `@kabaevroman/pi-code-bundle`.

For local development, include this repository as `bundle/` in the sibling-repository workspace, build core, then run `npm test` and `npm run typecheck` from the workspace root.

## Publishing to GitHub Packages

The `.github/workflows/publish.yml` workflow publishes this package when a tag is
pushed. It uses the automatic `GITHUB_TOKEN` with `packages: write`; no custom
publishing secret is needed. Enable GitHub Actions in this repository.

Update `package.json` to the release version, commit it, then push a matching tag:

```sh
git tag v0.5.0
git push origin v0.5.0
```

Tags must equal the package version, optionally prefixed with `v`. The workflow
installs dependencies, builds if needed, typechecks, and runs available tests
before publishing. Stable versions use `latest`; prereleases use `next`.
Each version can only be published once.

Publish matching dependency versions in order: `@kabaevroman/pi-code-core`, then
the individual extensions, then `@kabaevroman/pi-code-bundle`. After publishing
core, open its GitHub package settings → Manage Actions access and grant **Read**
to every extension repository that depends on it. Before publishing the bundle,
grant its repository **Read** access to each extension package and core as well.
This allows the repositories' `GITHUB_TOKEN` to install dependencies.

New GitHub packages default to private visibility. Change visibility in the
GitHub package settings if public distribution is intended.

## Installing from GitHub Packages

The committed `.npmrc` routes `@kabaevroman` packages to GitHub Packages and leaves
other packages on the default npm registry. Consumers need the same scope mapping
in their project or user `.npmrc`. Authenticate locally with a GitHub personal
access token **(classic)** with `read:packages` and access to the packages:

```sh
npm login --scope=@kabaevroman --auth-type=legacy --registry=https://npm.pkg.github.com
```

Use your GitHub username and the token as the password. Authentication is required
even for public GitHub npm packages. Keep credentials in your user configuration;
never commit tokens. Install using the full scoped package name.
