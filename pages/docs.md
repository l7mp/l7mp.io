---
layout: documents
title: Documentation
permalink: /docs/
---

# Documentation

<!-- <img src="../assets/images/under-construction.png" alt="Under construction" width="150"> -->

Welcome to the {{ site.title }} Documentation pages!

<div class="section-index">
    <hr class="panel-line">
    {% assign sorted = site.docs | sort: 'order' %}
    {% for post in sorted  %}
    <div class="entry">
    <h5><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h5>
    <p>{{ post.description }}</p>
    </div>{% endfor %}
</div>
