---
layout: page
title: About
ads: false
---

<section class="p-media p-media--page" itemprop="author" itemscope itemtype="http://schema.org/Person">
	<img src="{{ "/assets/img/" | append: site.author.image | prepend: site.baseurl | prepend: site.cdn_url }}" class="p-media__image" alt="{{ site.author.name }}">
	<div class="p-media__author">
		<h1>Hello!! I am <strong class="p-media__name" itemprop="name">{{ site.author.name }}</strong>.</h1>
		<p class="p-media__description" itemprop="description">{{ site.title }}は、{{ site.description }}</p>
	</div>
</section>

## できること（？）

HTML, CSS, jQuery（多少）, JavaScript（勉強中）, PHP（ちょっと）

## 制作環境

 - Sass
 - Gulp
 - Jekyll
 - WordPress
 - Sublime Text3
 - Photoshop
 - Illustrator
 - Sketch 2
 - OS X
 - VCCW

このサイトDOMINOMATRIXは、Static Site Generator [Jekyll][jekyll]を使い[GitHub Pages][github pages]でホスティングしています。CSSはSass(scss)で記述して、[FLOCSS][flocss]を参考にさせてもらい構成しています。

[jekyll]:          http://jekyllrb.com/
[github pages]:    https://pages.github.com/
[flocss]:          https://github.com/hiloki/flocss
