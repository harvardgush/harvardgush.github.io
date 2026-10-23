# Group for Undergraduates in Statistics at Harvard (GUSH)

### Live at [https://gushclub.org](https://gushclub.org)


## How to update
First, use `git pull` to get any changes to the remote branch. 

While making changes, use `npm run start` to preview the website locally (and try `npm install` if something gives an error)

When the website is done, use `npm run build` in order to get the final website. 

Then use `git add .`, `git commit -m "[INSERT MESSAGE HERE]"`, and `git push` for changes to be made on the website.

`npm run build` writes directly into `docs/` (set by `BUILD_PATH=docs` in `.env`), which is the folder GitHub Pages serves. This works the same on macOS, Linux, and Windows. If changes aren't appearing on the website, check that `docs/` was rebuilt and committed.

To check how the site looks in production before pushing, run `npx serve docs` after building.

There is no `npm run deploy`; pushing `docs/` to `main` is the deploy.

Also, on Github, check Settings --> Pages --> "Custom domain" and make sure `gushclub.org` satisfies the DNS check. 