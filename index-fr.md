---
published: true
layout: "theme-wet-boew/default"
permalink: "index-fr.html"
title: Variant pour Jekyll
language: fr
altLangPrefix: index
dateModified: "2014-05-27"
description: "Variant pour Jekyll - Boîte à outils de l'expérience Web (BOEW)"
---

## Pages Web normales

* [Thème du Canada.ca](gcweb/index-fr.html)
* [Thème de la facilité d'emploi Web GC](theme-gcwu-fegc/index-fr.html)
* [Thème du gouvernement du Canada pour les sites intranet](theme-gc-intranet/index-fr.html)
* [Thème de la BOEW](theme-wet-boew/index-fr.html)
* [Thème de base](theme-base/index-fr.html)
* [Thème de la PGO](theme-ogpl/index-fr.html)

## Articles de blogue

<ul>
{% for post in site.posts %}
{% if post.url contains '-fr.html' %}
    <li>
		<a href="{{ post.url | remove_first:'/' }}">{{ post.title }}</a>
		{{ post.excerpt }}
    </li>
{% endif %}
{% endfor %}
</ul>
