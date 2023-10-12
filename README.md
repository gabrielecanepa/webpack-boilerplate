# Webpack Boilerplate

Simple webpack starter with the following configuration:

-   [Yarn](https://yarnpkg.com)
-   [webpack](https://webpack.js.org)
-   [Babel](https://babeljs.io) with [the latest preset](https://babeljs.io/docs/en/babel-preset-env)
-   [ESLint](https://eslint.org)
-   [Sass](http://sass-lang.com) with [stylelint](https://stylelint.io) and modules import to enjoy hot reloading
-   [GitHub Pages](https://www.npmjs.com/package/gh-pages) to easily deploy the static pages

## Usage

Clone the repository on your computer. You must have [Node.js](https://nodejs.org) (> v4) and [Yarn](https://yarnpkg.com/lang/en/docs/install) installed:

```bash
git clone git@github.com:gabrielecanepa/webpack-boilerplate.git my-project
cd my-project
rm -rf .git
yarn
```

Make sure to have `./node_modules/.bin` in your `$PATH`. This way you can run your server with:

```bash
webpack-dev-server
```

### Scripts

Some scripts are already provided in your `package.json`.

To start a local server on port `8080`:

```bash
yarn start
```

To lint all the JavaScript and CSS/SCSS files:

```bash
yarn lint
```

To build the static files:

```bash
yarn build
```

To push the built files to the `gh-pages` branch and deploy to [GitHub Pages](https://pages.github.com):

```bash
yarn deploy
```
