
# Events landing

Statically generated landing website that lists your events.

Logo by Icondesk at [NounProject](https://thenounproject.com/search/?q=chip&i=1260497#)

# Features

- Automatically updated webcalendar (ICS format) 
- Add/Remove events
- Automatic recognition of past events
- Easy footer and header customization


# Run project

Needs: Ruby

## Local 

1. Clone repository to your computer with `git clone https://github.com/csgsa/events-landing`
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

## Update officers list

1. Go to [_data/officers.yml](_data/officers.yml)
2. Edit the info for the appropriate position

## Add photo albums to carousel

1. I've been hosting the photo albums on the csgsa@colorado.edu Google Photos account
2. Add one photo to the [assets/img/](assets/img/) directory as a preview image
3. Go to [_data/carousel.yml](_data/carousel.yml)
4. Copy and paste the following text
```
- title: Winter Celebration 2016
  image-url: assets/img/2016wintercel.jpg
  url: https://www.flickr.com/photos/139176861@N07/sets/72157675895676372

```
5. Edit the properties as described in the text you just copied

## Add a newsletter post

1. Write a post in markdown
2. Save to [_posts/YYYY-MM-DD-Title-of-post-seperated-with-dashes.md](_posts/)
3. It will be added to the newsletter page automatically. 

## Add/change footer links

You can change footer links by editing the file  [_data/footer_links.yml](_data/footer_links.yml)

## Global variables

You can change various strings across the site, including the title of your app on [_config.yml](_config.yml)

## Theme variables

Main colors can be changed on [_config.yml](_config.yml). For more "deep" styling, you can edit all styling in [assets/css/main.scss](assets/css/main.scss)



# License


MIT © Gerard Casas Saez
