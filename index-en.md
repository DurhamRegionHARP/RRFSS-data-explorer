---
published: true
layout: "theme-wet-boew/default"
permalink: "index-en.html"
title: Jekyll variant
language: en
altLangPrefix: index
dateModified: "2014-05-27"
description: "Jekyll variant - Web Experience Toolkit (WET)"
---

## Normal Web pages

* [Canada.ca theme](gcweb/index-en.html)
* [GC Web Usability theme](theme-gcwu-fegc/index-en.html)
* [GC Intranet theme](theme-gc-intranet/index-en.html)
* [WET theme](theme-wet-boew/index-en.html)
* [Base theme](theme-base/index-en.html)
* [OGPL theme](theme-ogpl/index-en.html)

## Blog posts

<ul>
{% for post in site.posts %}
{% if post.url contains '-en.html' %}
    <li>
		<a href="{{ post.url | remove_first:'/' }}">{{ post.title }}</a>
		{{ post.excerpt }}
    </li>
{% endif %}
{% endfor %}
</ul>
