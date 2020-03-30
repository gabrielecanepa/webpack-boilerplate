# Webpack boilerplate

Simple webpack starter with the following configuration:

-   [Yarn](https://yarnpkg.com)
-   [webpack](https://webpack.js.org)
-   [Babel](https://babeljs.io) with [the latest preset](https://babeljs.io/docs/en/babel-preset-env)
-   [ESLint](https://eslint.org) with [base Airbnb configuration](https://www.npmjs.com/package/eslint-config-airbnb-base)
-   [Sass](http://sass-lang.com) with [stylelint](https://stylelint.io) and modules import to enjoy hot reloading
-   [gh-pages](https://www.npmjs.com/package/gh-pages) to easily deploy on GitHub Pages

## Usage

> 💡 Want to be able to run a new, up-to-date boilerplate with a command as simple as `webpack:init`?
> Check out **[webpack-init](https://github.com/gabrielecanepa/webpack-init)**, and bootstrap a new project in seconds 📦✨👌

Clone the repository on your computer. You must have [Node.js](https://nodejs.org) (> v4) and [Yarn](https://yarnpkg.com/lang/en/docs/install) installed:

```bash
git clone git@github.com:gabrielecanepa/webpack-boilerplate.git my-webpack-project
cd my-webpack-project
rm -rf .git
yarn install
```

Make sure you have `./node_modules/.bin` in your `$PATH`. This way you can run your server with:

```bash
webpack-dev-server
```

### Scripts

Some scripts are provided in your `package.json`.

To start a local server on port `8080`:

```bash
yarn start
```

To lint all your JavaScript and CSS/SCSS files:

```bash
yarn lint
```

To build your static files:

```bash
yarn build
```

To push the built files to the `gh-pages` branch and deploy on [GitHub Pages](https://pages.github.com):

```bash
yarn deploy
```

## Contributing

1.  Fork the repository
2.  Create your feature branch (`git checkout -b my-new-feature`)
3.  Commit your changes (`git commit -m "Add some feature"`)
4.  Push to the branch (`git push origin my-new-feature`)
5.  Create a new pull request
