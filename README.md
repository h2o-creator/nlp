# nlp

Natural Language Processing using JavaScript, Node.js, Express, and build tools.

## Author

Abdelhady Salah

## Description

This package uses the Sentiment API provided by Meaning Cloud to allow the end-user to analyze paragraphs using AI. It allows you to know certain impressions about the paragraph such as irony, confidence, score tag, etc.

The project uses WebPack build tool along with some other packages such as the Babel transpiler, minimizers, Axios, Express, etc.

## Preview

![NLP Project Preview](./preview/project-nlp-preview)

## Installation

Simply `cd` to the nlp project directory and run:
```sh
npm install
```

Then, run either of the available build scripts that suits your needs:
```sh
npm run build-dev # to build for dev: supports hot-reloading, source map and cleaning
npm run build-prod # to build for production: minify CSS and optimize for production
```

Don't forget to rename `.env.example` to `.env` and provide your API key there.
Get API key from here: https://www.meaningcloud.com/developer/sentiment-analysis

Now you can start the project:
```sh
npm start
```

Enjoy!

## Dependencies

```json
  "dependencies": {
    "axios": "^0.24.0",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "webpack": "^5.61.0",
    "webpack-cli": "^4.9.1"
  },
  "devDependencies": {
    "@babel/core": "^7.16.0",
    "@babel/preset-env": "^7.16.0",
    "babel-loader": "^8.2.3",
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.5.0",
    "css-minimizer-webpack-plugin": "^3.1.1",
    "html-webpack-plugin": "^5.5.0",
    "jest": "^27.3.1",
    "mini-css-extract-plugin": "^2.4.3",
    "node-sass": "^6.0.1",
    "sass-loader": "^12.3.0",
    "style-loader": "^3.3.1",
    "terser-webpack-plugin": "^5.2.4",
    "webpack-dev-server": "^4.4.0",
    "workbox-webpack-plugin": "^6.3.0"
  }
```

## Scripts

```json
  "scripts": {
    "test": "jest",
    "build-dev": "webpack-dev-server --config webpack.dev.js --open",
    "build-prod": "webpack --config webpack.prod.js",
    "start": "node ./src/server/server.js"
  },
```

## Styling

This package uses SASS loader to convert .scss styles into valid CSS. You can make use of the powerful SASS features to improve the style of the app. The current style that I've created is not so good but my focus was on the API.