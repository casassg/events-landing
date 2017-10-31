---
title: Home
layout: base
og: assets/img/og.png
description: HackCU events
---


<section class="events">
    <div class="container">
        <div class="row">
            <h2>Our events</h2>
            {% for event in site.data.events %}               
                <div class="col-sm-4">
                    <a {% unless event.url == "undefined" %} href="{{event.url}}" {% endunless %} target="_blank" class="event-url">
                        <div class="panel panel-default ">
                            <div class="panel-heading">
                                <img class="img-responsive" src="{% if event.image-url %}{{event.image-url}}{% else %}assets/img/flatirons.jpg{%endif%}">
                                <h3 {% unless event.white-text == null %} class="white"{% endunless %} >{{event.name}}</h3>
                            </div>
                            <div class="panel-body event" data-date="{{ event.date }}">                                
                                <p></p>
                                <dl class="dl-horizontal">
                                  <dt>What?</dt>
                                  <dd>{{event.line}}</dd>
                                  <dt>When?</dt>
                                  <dd>{{event.date}}</dd>
                                  <dt>Where?</dt>
                                  <dd>{{event.location}}</dd>
                                </dl>
                                <small class="until"></small>
                            </div>
                        </div>
                    </a>
                </div>
            {% endfor %}
        </div>
    </div>
</section>
