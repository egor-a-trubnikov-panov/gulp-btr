# gulp-btr

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] 

Plugin, that fetches `*.tmpl.js` files and renders btrjson. This is just a wrapper around [BTR](https://github.com/egor-a-trubnikov-panov/btr), all questions about BTR should go there.

## Usage

```js
var gulp = require('gulp');
var btr = require('gulp-btr');

var btrjson = {
    block: 'page',
    tag: 'html',
    content: '<h1>Hello world!</ht>'
};

gulp.src('*.tmpl.js')
    .pipe(btr(bemjson, 'index.html'))
    .pipe(gulp.dest('./dist'));
```

### API

#### btr(bemjson, filename)

Creates writable stream, that consumes `*.btr.js` files. After `finish` event it will generate single file with compiled HTML from passed `btrjson`.

###### bemjson
Type: `Object`

###### filename
Type: `String`