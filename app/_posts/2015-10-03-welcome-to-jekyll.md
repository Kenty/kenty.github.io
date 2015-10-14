---
layout: post
title:  "Jekyll始めました。2015 秋"
author: Kenta Hoshino
date:   2015-10-3 12:08:02
categories: [jekyll]
tags: ['design', 'jekyll', 'github']
image: jekyll-logo.jpg

---

とある事情でAmazon EC2のWordPressから[Github Pages][github pages]の[Jekyll][jekyll]に乗り換えました。

とある事情といってもAWSの無料枠の期間が終了したこと、終了した次の月の料金が想像してた以上に掛かっていたこと（自分で設定を見直さなかったのが原因）。
とりあえず移行した経緯、やったことを簡単に書いてみようかと思います。

<!--more-->

## きっかけ
なんといっても乗り換えようと決断させたのはAWSのサービス料金が跳ね上がっていたこと。

無料枠が終了した月はTotalで$18ぐらい（あとで気づいたんだけどありがたいことにクレジットで値引きされてた）。サイト自体もデフォルト・テーマ、設置はしたけど大して更新なんかしてなっかったしアクセスなんかほぼないからこんなものかぁなんてあぐらかいてたんだけど、次の月が$42になっていました。

![Payment Elastic Load Balancing](/images/2015-10-03_22_26_17.jpg)

結論から言えば無料枠で入れてたElastic Load Balancingを外さなかったこと。アクセスあれば入れていても良いものなんだろうけど、更新してない自分にとっては無用の長物だしこれだけでやく半分をしめていて掛かり過ぎだろ？ と。
むしろ毎月何もしてないところに５千円ちかくをpayするなんて...（そんな余裕はまったくありません）恐ろしい。

いい機会だし勉強も兼ねてGithub Pages + Static Site Generatorでホスティングすることにしました。

## やったこと
Static Site Generatorといってもいろいろあるみたいで、

- [Octopress][octopress]
- [Middleman][middleman]
- [Jekyll][jekyll]
- [Roots][roots]
- [Hugo][hugo]
- [とかとかetc...][etc]

最近だと

- [Jekyllが許されるのは小学生までだよね](http://t32k.me/mol/log/hugo/)
- [OctopressからHugoへ移行した](http://deeeet.com/writing/2014/12/25/hugo/)
- [MiddlemanからHugoへ移行した](http://re-dzine.net/2015/01/hugo/)
- [WordPressからHugoへ移行して、ビルドとデプロイを自動化した話](http://creative-tweet.net/blog/2015/10/good-bye-wordpress.html)

と、こぞってHugoおしみたいですけど、小学生以下の技術力なので情報がたくさんあったJeykllを選んでみました。

前提としてはGitHubのアカウントをもっている、RubyとRubyGemが使っているPCに入っていることが最低必要条件だと思います。
基本的には[GitHub Pages][github pages]と[Jekyll(日本語)][jekyll-ja]のページを見てもらえれば問題はないかなと。

- Githubでリポジトリの作成
- Jekyllのインストール
- ルートディレクトリーにリポジトリを`git clone`
- Gulpでビルドするので`_config.yml`に`source: ./app`と`destination: ./build`へ変更
- パーマリンクを`date`から`/blog/:title`へ変更
- デプロイもdefaultは`origin master`でそこでビルドしてくれるみたいだけど実はここで嵌った
- Jekyllプラグインを使いたかったので`gh-pages`ブランチを作成した（ここ`src`とかでもいいみたい）
- `CNAME`でCustom domainを使う
- テーマも勉強がてら自分で作成（継続中…）
- 極力、アクセシビリティを意識したマークアップを心掛ける。

となどなど他にもありますが、次回にもうちょっと詳しく書いてみたいと思います。

[jekyll]:          http://jekyllrb.com/
[jekyll-ja]:       http://jekyllrb-ja.github.io/
[octopress]:       http://octopress.org/
[middleman]:       http://middlemanapp.com/
[roots]:           http://roots.cx/
[hugo]:            http://gohugo.io/
[etc]:             https://www.staticgen.com/
[github pages]:    https://pages.github.com/
