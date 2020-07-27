---
layout: base
title: Home
---
# Welcome
This is just a test page!

## Articles <small>(sourced from {{ devto.feed }})</small>
<ul class="listing">
{% for item in devto.posts %}
  <li>
    <p class="meta">Published on {{ item.pubDate }} by {{ item.author }}</p>
    <h3><a href="/posts/{{ item.path }}">{{ item.title }}</a></h3>
  </li>
 {% endfor %}
</ul>