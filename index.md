---
title: Home
layout: base
og: assets/img/localhackday.png
description: HackCU community webpage. Check all our workshops and events coming up!
---


<section class="events">
    <div class="container">
        <div class="row">
            <h2 class="text-center">Our events</h2>
            {% for event in site.data.events %}               
                <div class="col-sm-6 col-md-4">
                    <a {% unless event.url == "undefined" %} href="{{event.url}}" {% endunless %} target="_blank" class="event-url">
                        <div class="panel panel-default ">
                            <div class="panel-heading">
                                {% if event.image-url %}<img class="img-responsive {% unless event.white-text == null %}white{% endunless %}" src="{{event.image-url}}">{%endif%}
                                <h3 {% unless event.white-text == null %} class="white"{% endunless %} >{{event.name}}</h3>
                            </div>
                            <div class="panel-body event" data-date="{{ event.date }}">                                
                                <p>{{event.line}}</p>
                                <small class="bottom">{{event.date |  date: "%-d %B %Y" }} at {{event.location}}</small>
                            </div>
                        </div>
                    </a>
                </div>
            {% endfor %}
        </div>
        <a class="btn btn-primary calendar" href="https://calendar.google.com/calendar/r?cid=webcal://{{ site.domain }}/calendars/events.ics" target="_blank">Open calendar</a>
    </div>

</section>
