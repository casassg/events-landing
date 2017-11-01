---
title: Home
layout: base
og: assets/img/localhackday.png
description: Find all of HackCU's events in one place.
---


<section class="events">
    <div class="container">
        <div class="row">
            <h2 class="text-center white-text">Our events</h2>
            {% for event in site.data.events %}               
                <div class="col-sm-6 col-md-4">
                    <a {% unless event.url == null %} href="{{event.url}}" {% endunless %} target="_blank" class="event-url">
                        <div class="panel panel-default ">
                            <div class="panel-heading">
                                <span class="past-text">PAST</span>
                                {% if event.image-url %}<img class="img-responsive {% unless event.light_background == null %}light_background{% endunless %}" src="{{event.image-url}}">{%endif%}
                                <h3 {% unless event.light_background == null %} class="light_background"{% endunless %} >{{event.name}}</h3>
                            </div>
                            <div class="panel-body event" data-date="{{ event.date }}">                                
                                <p>{{event.line}}</p>
                                <small class="bottom">{{event.date |  date: "%a %-d %b %Y" }} {% unless event.location == null or event.date == null  %}at{% endunless %} {{event.location}}</small>
                            </div>
                        </div>
                    </a>
                </div>
            {% endfor %}
        </div>
        <a class="btn calendar" href="https://calendar.google.com/calendar/r?cid=webcal://{{ site.domain }}/calendars/events.ics" target="_blank">Add calendar</a>
    </div>

</section>
