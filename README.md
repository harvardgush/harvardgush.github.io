# Group for Undergraduates in Statistics at Harvard (GUSH)

### New and improved website at [https://harvardgush.github.io/](https://harvardgush.github.io/)


## How to update
First, use `git pull` to get any changes to the remote branch. 

While making changes, use `npm run start` to preview the website locally (and try `npm install` if something gives an error)

When the website is done, use `npm run build` in order to get the final website. 

Then use `git add .`, `git commit -m "[INSERT MESSAGE HERE]"`, and `git push` for changes to be made on the website.

If changes aren't appearing on the website, try looking in "docs" to see if your changes are reflected--if not, look into changing `package.json`, specifically `scripts --> build`, and the right command changes based on the operating system (Windows vs. mac)

Also, on Github, check Settings --> Pages --> "Custom domain" and make sure `gushclub.org` satisfies the DNS check. 