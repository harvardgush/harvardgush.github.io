# GUSH website (gushclub.org)

Source for the Group for Undergraduates in Statistics at Harvard website.
GitHub repo: harvardgush/harvardgush.github.io. Live at https://gushclub.org.
Local clone: ~/Developer/personal/gushclub. Co-maintainer Eric Tong works on
Windows, so keep every script and config cross-platform.

## How the domain is connected (verified 2026-10-23)
Three independent pieces, each checked against the live config:

1. **GitHub Pages source.** Repo Settings > Pages is set to branch `main`,
   folder `/docs`. Pages takes whatever is committed in `docs/` and serves it
   as static files. There is no GitHub Actions workflow; build type is
   "legacy", meaning "serve the committed folder as-is".
2. **CNAME file.** `docs/CNAME` contains `gushclub.org`. GitHub reads that
   file to know which custom domain this repo claims. It is generated from
   `public/CNAME` on every build (CRA copies `public/` into the build dir).
   If `public/CNAME` is ever deleted, the next push silently detaches the
   domain and the site falls back to harvardgush.github.io.
3. **DNS at the registrar.** `gushclub.org` has four A records pointing at
   GitHub Pages' anycast IPs (185.199.108-111.153). `www.gushclub.org` is a
   CNAME to `harvardgush.github.io`. The domain is verified under the
   harvardgush org, HTTPS is enforced, and the cert (covers apex + www)
   auto-renews; current one expires 2027-01-09.

Check all of this from the CLI without opening a browser:
```
gh api repos/harvardgush/harvardgush.github.io/pages
dig +short gushclub.org A
dig +short www.gushclub.org CNAME
```

So the full path is: edit `src/` -> `npm run build` writes `docs/` ->
`git push` to `main` -> Pages republishes within ~1-2 min -> DNS already
routes gushclub.org to Pages -> visitors see the new build.

## Stack
- Create React App (react-scripts 5.0.1), React 18, react-router 7 with
  **HashRouter** (URLs look like gushclub.org/#/events; this avoids 404s on
  Pages because every route is really `index.html`). Tailwind 3 + Bootstrap 5.
- Node: Homebrew `node@24` (LTS). It is keg-only, so `~/.zshrc` exports
  `/opt/homebrew/opt/node@24/bin` onto PATH. `.nvmrc` says 24 for anyone
  using nvm/fnm instead.
- Content lives in `src/Components/`: `board.js` (team), `event.js`
  (events), `sponsor.js` (sponsors). Images go in `public/` and are referenced
  by root-relative path. The repo is ~150 MB, almost all images.

## Workflow
```
git pull
npm install          # first time, or after package.json changes
npm start            # live preview at http://localhost:3000
npm run build        # writes to docs/ (BUILD_PATH=docs in .env)
git add . && git commit -m "..." && git push
```
Always commit `docs/` together with the `src/` change that produced it.

## Setup decisions and gotchas
- **Build script.** Originally `react-scripts build && rimraf docs && move
  build docs`; `move` is Windows-only. Replaced with `BUILD_PATH=docs` in
  `.env`, a documented CRA 5 setting. CRA empties the target dir itself, so
  `rimraf` is no longer needed. Verified on 2026-10-23: the fresh macOS build
  produced the same bundle hash (`main.64297154.js`) as Eric's committed
  build. The only diff was inside `.map` files, where Eric's embedded source
  text has CRLF line endings. Harmless; expect `.map` churn when the two
  machines alternate builds.
- **`.env` is force-tracked.** Jesse's global gitignore
  (`~/.config/git/ignore`) ignores `.env`. It was added with `git add -f`
  and stays tracked, but if you ever recreate it you need `-f` again.
- **Removed 2026-10-23:** the `gh-pages` deploy scripts (from an older setup
  that published a `gh-pages` branch Pages no longer reads), the unused
  `rimraf`/`jquery`/`json-loader` packages, and the CRA placeholder test
  (`App.test.js`, `setupTests.js`, testing-library). The placeholder test
  could not run anyway: CRA's Jest 27 cannot resolve react-router 7's package
  exports. There is no `npm test`; testing is `npm start` plus
  `npm run build && npx serve docs`.
- **`homepage` in package.json** is `https://harvardgush.github.io/`. Only
  the path part (`/`) matters to CRA, so it is correct for gushclub.org too.
- **Browserslist warning** on build ("caniuse-lite is 13 months old") is
  cosmetic. `npx update-browserslist-db@latest` silences it.
- **npm install warnings** about `fsevents` install scripts are normal on
  macOS.
