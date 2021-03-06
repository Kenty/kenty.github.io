---
layout: post
title: StyleGuide
categories: []
tags: [jekyll, styleguide]
published: True
author: Kenta Hoshino
date: 2015-10-12 14:43:36

---

このページは”DOMINOMATRIX”で使用しているスタイルガイドです。

<!--more-->

```bash
~ $ tree
.
├── _config.yml
├── _includes
│   ├── footer.html
│   ├── head.html
│   └── header.html
├── _layouts
│   ├── default.html
│   ├── page.html
│   └── post.html
├── _posts
│   └── 2015-10-09-welcome-to-jekyll.markdown
├── _sass
│   ├── _base.scss
│   ├── _layout.scss
│   └── _syntax-highlighting.scss
├── _site
│   ├── about
│   │   └── index.html
│   ├── css
│   │   └── main.css
│   ├── feed.xml
│   ├── index.html
│   └── jekyll
│       └── update
│           └── 2015
│               └── 10
│                   └── 10
│                       └── welcome-to-jekyll.html
├── about.md
├── css
│   └── main.scss
├── feed.xml
└── index.html

13 directories, 20 files
```

```json
{
  "name": "dm-gulp-task",
  "version": "0.1.1",
  "description": "Base framework foundation with gulp",
  "main": "gulpfile.js",
  "private": true,
  "browser": {
    "modernizr": "./app/_assets/_bower_components/modernizr/modernizr.js",
    "foundation": "./node_modules/foundation-sites/js/foundation.js",
    "smooth-scroll": "./app/_assets/lib/smooth-scroll.js",
    "Chart": "./app/_assets/lib/Chart.js",
    "responsive-nav": "./app/_assets/lib/responsive-nav.js",
    "fastClick": "./app/_assets/lib/fastclick.js"
  },
  "browserify-shim": {
    "modernizr": "Modernizr",
    "jquery": "global:$",
    "foundation": "foundation",
    "chart": "Chart",
    "responsive-nav": "responsiveNav",
    "fastClick": "fastClick",
    "smooth-scroll": "smoothScroll"
  },
  "browserify": {
    "transform": [
      "browserify-shim"
    ]
  },
  "devDependencies": {
    "browser-sync": "*",
    "browserify": "^11.0.0",
    "browserify-shim": "^3.8.10",
    "del": "^2.0.2",
    "gulp": "3.9.0",
    "gulp-autoprefixer": "^3.0.1",
    "gulp-awspublish": "^3.0.1",
    "gulp-bower-files": "^0.2.7",
    "gulp-changed": "*",
    "gulp-concat": "^2.6.0",
    "gulp-csso": "^1.0.0",
    "gulp-filter": "^3.0.0",
    "gulp-gh-pages": "^0.5.2",
    "gulp-gzip": "^1.2.0",
    "gulp-htmlmin": "^1.1.4",
    "gulp-if": "^2.0.0",
    "gulp-imagemin": "^2.3.0",
    "gulp-jshint": "*",
    "gulp-load-plugins": "*",
    "gulp-minify-css": "^1.2.1",
    "gulp-newer": "*",
    "gulp-notify": "^2.2.0",
    "gulp-plumber": "*",
    "gulp-rename": "*",
    "gulp-rsync": "0.0.5",
    "gulp-ruby-sass": "^2.0.5",
    "gulp-sass": "^2.0.4",
    "gulp-sass-bulk-import": "^0.3.2",
    "gulp-size": "^2.0.0",
    "gulp-sourcemaps": "*",
    "gulp-uglify": "*",
    "gulp-util": "^3.0.6",
    "gulp-watch": "^4.3.3",
    "jshint-stylish": "^2.0.1",
    "main-bower-files": "^2.9.0",
    "pretty-hrtime": "^1.0.0",
    "require-dir": "^0.3.0",
    "run-sequence": "^1.1.2",
    "vinyl-buffer": "^1.0.0",
    "vinyl-source-stream": "^1.1.0",
    "watchify": "^3.3.0"
  },
  "scripts": {
    "postinstall": "bower install;",
    "start": "gulp",
    "deploy": "gulp deploy",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "foundation-sites": "^5.5.2"
  }
}

```
