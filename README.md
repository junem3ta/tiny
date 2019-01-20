@junem3ta/tiny

![](https://img.shields.io/npm/v/@junem3ta/tiny.svg)
![](https://img.shields.io/bundlephobia/min/@junem3ta/tiny.svg)

A simple npm package

## Install

```
$ npm install @bamblehorse/tiny
```

## Usage

```js
const tiny = require("@bamblehorse/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
