---
title: Home
layout: base
---


<section class="events">
    <div class="container">
        <div class="row">
            <h2 class="text-center white-text">Our activities</h2>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 events-switch">
                <div class="col-xs-4 col-sm-5 col-md-5 col-lg-5 right">
                    <h4 class="label-text">All events</h4>
                </div>
                <div class="col-xs-4 col-sm-2 col-md-2 col-lg-2 center">
                    <label class="switch">
                        <input id="event-slider" type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="col-xs-4 col-sm-5 col-md-5 col-lg-5 left">
                    <h4 class="label-text">Incoming</h4>
                </div>
            </div>
        </div>
        <div class="row">
            {% assign sorted = site.data.events | sort: 'date','last' %}
            {% for event in sorted %}               
                <div class="col-sm-6 col-md-4 ">
                    <a {% unless event.url == null %} href="{{event.url}}" {% endunless %} target="_blank" class="event-url">
                        <div class="panel panel-default ">
                            <div class="panel-heading">
                                <span class="past-text">PAST</span>
                                {% if event.image-url %}<img class="img-responsive {% unless event.light_background == null %}light_background{% endunless %}" src="{{event.image-url}}">{%endif%}
                                <h4 class="{% unless event.light_background == null %}light_background{% endunless %}" >{{event.name}}</h4>
                            </div>
                            <div class="panel-body event" data-date="{{ event.date }}">                                
                                <p>{{event.line}}</p>
                            </div>
                            <div class="panel-footer">
                                {{event.date |  date: "%b %-d %Y" }} {% unless event.location == null or event.date == null  %}at{% endunless %} {{event.location}}
                            </div>
                        </div>
                    </a>
                </div>
            {% endfor %}
        </div>
        <div class="row text-center margin-top margin-bottom">
            <a class="btn btn-accent calendar" href="https://calendar.google.com/calendar/r?cid=webcal://{{ site.domain }}/calendars/events.ics" target="_blank">Add to Google Calendar</a>
        </div>
    </div>
</section>
