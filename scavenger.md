---
layout: page
title: 2018 Welcome CS Grad Scavenger Hunt
---

<p class="lead">Get ready to join the 2019 Scavenger Hunt. Solve the anagrams by finding the location shown in the image. Look around to find a text that is an anagram.</p>

<p class="lead">Once you are done, send your answers in the button below.</p>



## Anagrams and clues

Each image has an anagram assigned. Find the picture location to solve the anagram.

<section id="carousel" class="accent-section">

    <div class="container-fluid">
      <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          {% for item in site.data.anagrams %}
            <li data-target="#myCarousel" data-slide-to="{{forloop.index0}}" {% if forloop.index0 == 0 %}class="active"{%endif%}></li>
          {% endfor %}
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          {% for item in site.data.anagrams %}
            <div class="item {% if forloop.index0 == 0 %}active{%endif%}" style='background: linear-gradient(rgba(97, 98 ,116 , .2), rgba(97, 98 ,116 , .2)), url("/assets/img/scavenger/img{{forloop.index}}.png") no-repeat center center/contain;'>
              <!-- <img class="color-transp" src="/assets/img/scavenger/img{{forloop.index}}.png" alt="Clue for {{forloop.index}} test"> -->
            <div class="carousel-caption">
              <h3>{{forloop.index}}. {{item}}</h3>
            </div>
          </div>
          {%endfor %}


        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>

Check out the full version of the images [here](https://www.dropbox.com/sh/5x7xcddt67m8xst/AABIBsLEt0_B1E1UX9bF2sM1a?dl=0).


## End form

Done already? Send your answers here.

<div class="row">
  <div class="col-md-5">
    <a class="btn btn-accent btn-block" href="https://forms.gle/AjuvKN44SES4YWps5" target="_blank">
      Send answers
    </a>
  </div>
</div>
