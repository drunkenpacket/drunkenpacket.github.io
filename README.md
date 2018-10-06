Source to the Drunkenpacket blog.

The intent here is to organize this in a way that works with Hugo.
See [Hugo getting started](https://gohugo.io/getting-started/quick-start/)
on how I got started and made stuff.

# Howto
Helpful hints that are in the Hugo docs but that I had to learn the hard way.

* You can have subdirectories in `posts` that have the same name as
the post and put extra resources (e.g. images) in them.

* You can override theme resources. E.g. `static/images` contents will
replace `themes/hugo-theme-cactus-plus/static/images`

* Very obvious but... you can edit the markdown for the blog directly
in Github. That's convenient. Articles are in `content/posts`.

* From a checkout, use `hugo server -D` to render the site with `hugo`
and have it auto-reload. Some changes don't seem to auto-reload. But
Hugo is extremely fast so just kill it and run again if in doubt.

# Building
Update and push this and github will tell the server to deploy a new
version of the server.
