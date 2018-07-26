---
title: Wiki Tooling
date: 2010-12-02 07:00:00
tags: [software]
---

As per [our first new-style post](/drunkenpacket/2010/12/02/reboot/), the previous incarnation of drunkenpacket
had a custom tool chain for building sites. It was an *offline*
system:

*  posts were written in [Markdown](http://daringfireball.net/projects/markdown/)
*  collaboration was based on storing the changes in [git](http://git-scm.com/) and exchanging patches. (You'd be thinking
at this juncture that drunkenpacket is comprised of programmers.)
*  a miscellany of home-built command line tools in python constructed
the html content from the Markdown source
* yet more command line tools uploaded the static content to S3.

A number of consequences sprang from this:

* we have a lot of content already in Markdown. Conveniently,
posterous supports Markdown posts. So, we can re-purpose our content.
Including the never before articles unpublished 'cause they were
waiting on the tooling
*  I built a modified non-shared version of the tool-chain for notes
about work and stuff. So more Markdown content to draw from. Yay!
*  I have all of these scripts that need to be unified and
rationalized. Which has become yet another side project. (Henceforth
in acronym form as **YASP**  and to be pronounced like **gasp** after a
round of burpees.)

Present Tooling
======

*  `make` to control it all.
*  `perl` to convert Markdown source into HTML
*  `python` for inserting the generated HTML into the template
*  Custom [Go](http://golang.org/) programs for building an
interactive index of all the notes

Future Tooling
=====
One program in [Go](http://golang.org/) that finds all the markdown fragments, converts
them into html, templates, indexes and writes the result. Because Go
is new hotness. And I like the mascot.
