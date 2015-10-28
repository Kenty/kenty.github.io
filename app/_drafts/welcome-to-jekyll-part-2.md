---
layout: post
title: Jekyll始めました。2015 秋-Part-2
author: Kenta Hoshino
date: 2015-10-12
categories: []
tags: ['jekyll', 'github', 'github pages']
published: True

---

前回の記事でGithub PagesのJekyllに移行したきっかけをほんとうに簡単に書いたのですがが具体的に何をやったのかをもうちょっと詳しく書いていこうと思います。（※ ちなみに制作環境はMacOS X、RubyGems、あとはGulpを使っているのでNodeが入っていることが前提になります。）

<!--more-->

## 導入
基本的にはGitHub Pagesは２種類あって`username.github.io`のグループ用、個人用 `http://username.github.io`でアクセスでき、デプロイは`master`ブランチにされます。
もう一つはプロジェクト用 `http://username.github.io/project`でアクセスでき、デプロイは`gh-pages`ブランチにされます。（最初この違いを理解できていなくて色々と躓いた...けどおいおい。）

とりあえず前者で話を進めます。先ずは`username.github.io`でリポジトリを作成して、リポジトリは空にしときます。次にこのリポジトリをローカルに持ってきたいので`git clone`します。

```bash
~ $ git clone git@github.com:username/username.github.io
```

もってきたら`jekyll new`でこのプロジェクトディレクトリにひな形を作ってあげます。

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

の内容でひな形が作成されます。ちなみにリポジトリが空じゃないと、

```bash
Conflict: /Users/kent6223/test_jekyll.github.io exists and is not empty.
```
で作成してくれません。

https://console.aws.amazon.com/s3/home?region=ap-northeast-1&bucket=static.dominomatrix.com&prefix=assets/css/

おっと、**[Jekyll3.0](http://jekyllrb.com/news/2015/10/26/jekyll-3-0-released/)**が来たようだ！

[jekyll3.0]:       http://jekyllrb.com/news/2015/10/26/jekyll-3-0-released/
