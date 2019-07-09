---
layout: page
title: Archive
---

## Blog Posts

{% for post in site.posts %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url | absolute_url }})
{% endfor %}

## Newsletters

{% for post in site.newsletters %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url | absolute_url }})
{% endfor %}

## Photo Albums

{% for item in site.data.carousel %}
  * {{ item.date | date_to_string }} &raquo; [ {{item.title}} ]({{ item.url | absolute_url }})
{% endfor %}

