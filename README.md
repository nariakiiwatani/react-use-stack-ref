# dev-npm-package-react-typescript-boilerplate

It is a boilerplate for starting developing react library to be published to npm.

It setups 
- minimum building environment (including React and TypeScript)
- a GitHub Action to publish your library to npm
- a GitHub Action to publish the demo page as a GitHub Pages
- several scripts to help developing

# How to use

## prepare local repository

1. clone this repository
1. `git remote set-url origin [your-repository]`

## setup npm package information

1. edit package.json
	- "name" of the npm package you are going to publish
	- "author"
	- "repository"
1. you can do `git add` and `git commit` as usual

## setup dependencies

1. run `yarn setup:all`

## develop your library

1. rename or replace `src/ModuleFile.ts` with your library file(s)
1. edit `index.js` and `index.d.ts` as if your library files are all in `dist` folder.
1. you can do `git add` and `git commit` as usual

__NOTE: you must start a commit message like "perf:", "feat:" or "fix:" in at least one of the commits so that the auto-publishing action can decide next version number.__
more detail; see a documentation of [semantic-release](https://github.com/semantic-release/semantic-release)
It's recommended to use [git-todos](https://github.com/z0al/git-todos) together.

related scripts

```
# install dependencies
yarn run build
# build sources in `src` into `dist` folder
yarn run build
```

## create demo page

1. start creating your demo page from `demo/src/components/App.tsx`
1. you can `git add` and `git commit` as usual


related scripts

```
# install dependencies
yarn run build:demo
# build demo page into `demo/dist` folder
# it also copies `demo/dist` into `docs` for GitHub Pages
yarn run build:demo

# build library and start running local server to host demo page
yarn run dev
```


## setup remote repository

### get npm access token

1. if not yet, create npm user account on [npm](https://www.npmjs.com/)
1. create new token via `Settings -> Auth Tokens`
1. copy the token to clipboard

### prepare for publishing to npm

1. if not yet, create a git repository on [GitHub](https://github.com/)
1. go to `Settings -> Secrets`
1. create a Secret with
	- name: NPM_TOKEN
	- value: [copied npm token]

### publishing GitHub Pages
1. go to `Settings => Options -> GitHub Pages`
1. Select gh-pages branch
__note: you cannot set this before `git push` first time__
1. Select Folder `/(root)`

## Release!

1. commit your updates  
__Again confirm at least one of your commit messages starts with like "perf:", "feat:" or "fix:" otherwise no new version will be released__
1. just `git push` and the new version of npm package and latest demo page will be published automatically by GitHub Actions