@junem3ta/tiny

![](https://img.shields.io/npm/v/@junem3ta/tiny.svg)
![](https://img.shields.io/bundlephobia/min/tiny.svg)

A simple npm package

## Install

```
$ npm install @junem3ta/tiny
```

## Usage

```js
const tiny = require("@junem3ta/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
