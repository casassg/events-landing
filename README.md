
# Events landing

Statically generated landing website that lists your events

# Features

- Automatically updated webcalendar (ICS format) 
- Add/Remove events
- Automatic recognition of past events
- Easy footer and header customization


# Run project

Needs: Ruby

## Local 

1. Clone repository to your computer with `git clone https://github.com/casassg/events-landing`
2. `cd` into your repository
3. `gem install jekyll`
4. `jekyll serve --watch`

## Deploy


1. Push changes to master
2. There's no `3`

Deployment is done automatically by [GitHub pages](https://pages.github.com/). You don't need to do anything else than pushing to master.

# Use for your organization

1. Fork this repository
2. Activate Github pages for your new repo
3. Personalize

# Personalization

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

If you need a preview image please add it to [assets/img/](assets/img/). 

## Add/change footer links

You can change footer links by editing the file  [_data/footer_links.yml](_data/footer_links.yml)

## Global variables

You can change various strings across the site, including the title of your app on [_config.yml](_config.yml)

## Theme variables

Main colors can be changed on [_config.yml](_config.yml). For more "deep" styling, you can edit all styling in [assets/css/main.scss](assets/css/main.scss)



# License


MIT © Gerard Casas Saez
