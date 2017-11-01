<br>
<p align="center">
  <img alt="HackCU IV" src="https://github.com/HackCU/splash-page/blob/master/img/hackcu_black.png" width="200"/>
</p>
<br>


HackCU events website.

## Prereqs

You need Ruby installed

## Get project running locally 

1. Clone repository to your computer with `git clone https://github.com/hackcu/events`
2. `cd` into your repository
3. `gem install jekyll`
4. `jekyll serve --watch`

## How to deploy

Deployment is done automatically by github pages. You don't need to do anything else than pushing to master.

## Add an event

1. Go to [_data/events.yml](_data/events.yml)
2. Copy and paste the following text
```
- name: Startups2Students Fall #Event name
  light_background: True # Optional: only put if image-url is set and image is light
  image-url: assets/img/startups2students.png # Optional: only if you want a preview image in the heading
  line: Bridging the gap between students and startups # Small description of event
  date: 2017-10-19 6:00 PM # Optional: When is the event starting
  end-date: 2017-10-19 8:00 PM # Optional: When is the event ending, make sure you set it if date is set
  location: Idea Forge # Optional: Location where the event will be celebrated, set TBD if not sure yet
  url: https://startups2students.org # Optional: Url with more info about the event

```
3. Edit the properties as described in the text you just copied
4. Make sure you added the event in the correct place (order by date)

If you need a preview image please add it to [assets/img/](assets/img/). 

# License


MIT © HackCU
