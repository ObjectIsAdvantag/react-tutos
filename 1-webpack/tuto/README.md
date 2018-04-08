
extract from https://webpack.js.org/concepts/, https://auth0.com/blog/webpack-a-gentle-introduction

Take this baby steps:

1. Create the javascript source folder, such as [factory.js](js/factory.js) and [service.js](js/service.js) to make it modular


2. Create the webpack config `webpack.config.js`

    ```javascript
    const path = require('path');

    module.exports = {
    entry: './js/factory.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
    };
    ```


3. Add webpack to your JS project

    ```shell
    npm init --yes
    npm install webpack -D
    ```


4. Run the webpack command

    ```shell
    node ./node_modules/webpack/bin/webpack.js
    ```

    Go to dist/ and check the output file is built
    Run it to check

    ```shell
    node dist/bundle.js
    ```


5. [Optional] Make it easier to run webpack by adding it to npm scripts

    ```shell
    npm run build
    ```


6. Add a built-in plugin to webpack config

    ```javascript
    const path = require('path');
    const webpack = require('webpack'); //to access built-in plugins

    module.exports = {
        entry: './js/factory.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin()
        ]
    };
    ```
   

7. Reference the bundle from an 'index.html' page

    ```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>Test Webpack</title>
    </head>

    <script type="text/javascript" src="dist/bundle.js"></script>

    <body>
        <h2> Testing Webpack.... </h2>
    </body>

    </html>
    ```


8. Add ES6 references and babel pre-compilation


