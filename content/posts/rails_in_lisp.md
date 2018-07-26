---
title: Rails in Lisp
date: 2007-09-05 07:13:25
author: Rob
tags: [software]
---

It has occurred to me that it would be interesting to produce
something like [Rails][rails] in Lisp.  In the interests of brevity
and the general entertainment of the drunkenpacket community (all
three of you), let's give this project a pseudo-neat name: *RiL*.

This post is the first of several where we will discuss the possible implementation of RiL.  

What is distinct about Rails:

*    convention instead of configuration
*    defaults work out of the box and thereby provide for rapid development
*    powerful ORM mechanism
*    integrated template scheme

All of these are lovely features.  But to use them, we must write
Ruby.  Given that here at DrunkenPacket, we are afficiondoes (albeit
neophyte afficionadoes) of LISP, it strikes us as eminently reasonable
to investigate how we could replicate the niftyness of Rails using
Lisp.

Obviously, we do not want to re-write everything in LISP. Instead,
we want to imagine our Rails-in-LISP using some of the existing
components that are available.

Perhaps something like [HT Ajax](http://85.65.214.241/misc/ht-ajax.html)
would serve.  HT Ajax is (apparently) a framework for implementing
Ajax applications using the Hunchentoot web server.
