---
layout : page
---

## Computer Science Biweekly Antiracism and Inclusion Conversations (BAIC)

Diversity, Equity and Inclusion are fundamental to the success of the University of Colorado and its students. In the Department of Computer Science, our Biweekly Antiracism and Inclusion Conversations (BAIC)  aim to bring awareness and provide education around the essential topics of diversity, antiracism and inclusion as they relate to Computer Science and our Department through the candid exploration of various themes.  

## Schedule for Fall of 2022

{% assign semester = site.data.baic.schedule.fall22 %}
{% for entry in semester %}

### {{ entry.abstract }}

**Date** : {{ entry.date }}
{% if entry.time %}
**Time** : {{ entry.time }}
{% endif %}

**Summary** : {{ entry.summary }}

{% if entry.resources.size > 0 %}
**Resources**:

{% for resource in entry.resources %}
  * [{{ resource.text }}]({{ resource.url }})
{% endfor %}
{% endif %}
{% endfor %}

## Past schedules
* [Spring 22 Schedule](spring-2022-schedule)

* [Summer 22 Schedule](summer-2022-schedule)
