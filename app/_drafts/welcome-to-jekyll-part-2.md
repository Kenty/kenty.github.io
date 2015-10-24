---
layout: post
title: Jekyll始めました。2015 秋-Part-2
author: Kenta Hoshino
date: 2015-10-12
categories: []
tags: ['jekyll', 'github', 'github pages']
published: True

---

前回の記事でGithub PagesのJekyllに移行したきっかけをほんとうに簡単に書いたのですがが具体的に何をやったのかをもうちょっと詳しく書いていこうと思います。（※ ちなみに制作環境はMacOS X、RubyGems、jekyllが入っていることが前提。）

<!--more-->

## 導入
基本的にはGitHub Pagesは２種類あって`username.github.io`の組織用、個人用 `http://username.github.io`でアクセスでき、デプロイは`master`ブランチにされる。
もう一つはプロジェクト用 `http://username.github.io/project`でアクセスでき、デプロイは`gh-pages`ブランチにされる。（最初この違いを把握できていなくて色々と躓いたけどおいおい。）

先ずは`username.github.io`でリポジトリを作成する。リポジトリは空にしとく。次にこのリポジトリをローカルに持ってきたいので`git clone`する。

```bash
~ $ git clone git@github.com:username/username.github.io
```

もってきたら`jekyll new`でこのプロジェクトディレクトリにひな形を作ってあげる。

```bash
~ $ jekyll new username.github.io/
New jekyll site installed in /Users/username/username.github.io.
```

すると、

```bash
~ $ tree username.github.io/

username.github.io/
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
│   └── 2015-10-19-welcome-to-jekyll.markdown
├── _sass
│   ├── _base.scss
│   ├── _layout.scss
│   └── _syntax-highlighting.scss
├── about.md
├── css
│   └── main.scss
├── feed.xml
└── index.html

5 directories, 15 files
```

の内容でひな形が作成される。ちなみにリポジトリが空じゃないと、

```bash
Conflict: /Users/kent6223/test_jekyll.github.io exists and is not empty.
```
で作成してくれない。
