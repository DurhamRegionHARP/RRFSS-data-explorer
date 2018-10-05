---
published: true
layout: "theme-base/default"
permalink: "index.html"
title: RRFSS Data Explorer
language: en
altLangPrefix: index
dateModified: "2018-05-10"
description: "Showcase RRFSS results with Jekyll and WET"
languagetoggle: "false"
sitesearch: "false"
breadcrumb: "false"
secondarymenu: "false"
---
<div class="row">
	<div class="col-md-3">
		<img class="img-rounded img-responsive" src="{{ "/assets/images/rrfss.png" | relative_url }}" alt="RRFSS logo" />
	</div>
	<div class="col-md-6">
		{% capture about_rrfss %}{% include about.md %}{% endcapture %}
		{{ about_rrfss | markdownify }}
	</div>
</div>
<div class="row">
	<div class="col-md-8">
		<h2>About the Health Analytics, Research and Policy Team</h2>
		<p>Here's a little blurb about our team. Lorem ipsum dolor sit amet consectetur adipiscing elit nunc montes, ad sociis vulputate porttitor venenatis praesent pulvinar congue aliquet morbi, quis sollicitudin molestie porta eu tristique gravida tempor. Odio nec penatibus tellus vehicula suscipit natoque hac enim molestie, mattis sem arcu scelerisque sapien in ac erat faucibus condimentum, ridiculus lectus aenean nullam phasellus fermentum est dignissim.</p>
	</div>
	<div class="col-md-4">
		<h2>About the application</h2>
		<p>This is an open source project that uses Jekyll, WET and Chartist.js.</p>
		<ul class="list-unstyled">
			<li><a href="https://github.com/DurhamRegionHARP/RRFSS-data-explorer">Send Feedback</a></li>
			<li><a href="https://github.com/DurhamRegionHARP/RRFSS-data-explorer">View Code</a></li>
			<li><a href="https://github.com/DurhamRegionHARP/RRFSS-data-explorer">Download Data</a></li>
		</ul>
	</div>
</div>