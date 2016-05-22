---
title: sakura_ssh
layout: post
---

今回、サイトのリニューアルを頼まれて、さくらのレンタルサーバを借りる機会があったので備忘録で残すことにする。プランはビジネスプランで借りた。

さくらのレンタルはレンタルサーバでもssh接続ができるので
さくらインターネット株式会社から契約時に送られてくるメール

> [さくらのレンタルサーバ]仮登録完了のお知らせ
 > 
```
FTPサーバ名:      [account].sakura.ne.jp
FTPアカウント:    [account]
FTP初期フォルダ:  www
サーバパスワード: [password]
```

{% highlight bash %}
$ ssh [account]@[account].sakura.ne.jp
{% endhighlight %}

{% highlight bash %}
The authenticity of host '[account]@[account].sakura.ne.jp (111.88.111.22)' can't be established.
ECDSA key fingerprint is SHA256:fY9b/0IBeuboLTvUUOTvbgaLHMVEaY1DTCc4D6pjjs0.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '[account]@[account].sakura.ne.jp' (ECDSA) to the list of known hosts.
{% endhighlight %}

{% highlight bash %}
[account]@[account].sakura.ne.jp's password:
{% endhighlight %}

{% highlight bash %}
FreeBSD 9.1-RELEASE-p24 (SAKURA17) #0: Thu Feb  5 10:03:29 JST 2015

Welcome to FreeBSD!
{% endhighlight %}

<figure>
	<figcaption>explanatory caption</figcaption>
	![alt text](figures/img.png)	
</figure>

