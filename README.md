
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

## Update officers list

1. Go to [_data/officers.yml](_data/officers.yml)
2. Edit the info for the appropriate position

## Add photo albums to carousel

1. I've been hosting the photo albums on the csgsa@colorado.edu Google Photos account
2. Add a disclaimer to the album (wherever its hosted)
> If you'd like your photo removed from this album, please email csgsa@colorado.edu
3. Add one photo to the [assets/img/](assets/img/) directory as a preview image
4. Go to [_data/carousel.yml](_data/carousel.yml)
5. Copy and paste the following text
```
- title: Winter Celebration 2016
  image-url: assets/img/2016wintercel.jpg
  url: https://www.flickr.com/photos/139176861@N07/sets/72157675895676372

```
6. Edit the properties as described in the text you just copied

## Add a newsletter post

1. Write a post in markdown
2. Add the header 
```
---
layout: post
---
```
3. If you want a image to appear with the excerpt on the front page, use the header
```
---
layout: brochure
img: /assets/img/<file>
img_alt: <alt text>
---
```
This will create a post with a two column layout with the image on the left and the text on the right. There is no need to include the image in the markdown. 

4. The default excerpt shown on the front page is the first paragraph. If you want to have a custom length excerpt, add `<!--more-->` after your desired excerpt. 
5. Save to [_posts/YYYY-MM-DD-Title-of-post-seperated-with-dashes.md](_posts/)
6. Posts automatically appear on the front page in the "Newsletter" section in an abbreviated form with a link to the full version. They also are automatically linked to on the archive page. I recommend checking that everything looks right in both locations. 

## Create an email newsletter

1. Write in markdown.
2. Add header.
```
---
layout: newsletter
---
```
3. If you want to add a button use the following segment:
```
{% include emails/button.html action='Take the survey' url='https://cuboulder.qualtrics.com/jfe/form/SV_42ewryObxKdTj9z' %}
```
Replace `action` with the call to action text and `url` with the url that the button should point to.
5. Save to [_newsletters/YYYY-MM-DD-.md](_newsletters/)
6. Newsletters are automatically linked on the archive page.

### Sending email newsletter

1. Make sure the post is posted and accessible online. See: `bouldercsgrads.org/newsletters/YYYY/MM/` to find the newsletter for `YYYY` year and `MM` month.
2. View HTML and copy it. See [how to view the HTML on any browser](https://www.computerhope.com/issues/ch000746.htm).
3. Install [HTML Inserter for GMail](https://chrome.google.com/webstore/detail/html-inserter-for-gmail/lkdchkblgffcinmodbodlkclphfldkll)
4. Open GMail, open HTML Inserter and paste HTML content in it.
5. Insert into email
6. Send email.


## Add/change footer links

You can change footer links by editing the file  [_data/footer_links.yml](_data/footer_links.yml)

## Global variables

You can change various strings across the site, including the title of your app on [_config.yml](_config.yml)

## Theme variables

Main colors can be changed on [_config.yml](_config.yml). For more "deep" styling, you can edit all styling in [assets/css/main.scss](assets/css/main.scss)



# License


MIT © Gerard Casas Saez
