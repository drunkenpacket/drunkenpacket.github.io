---
title: Interleaing Pages
date: 2007-09-04 07:13:25
author: Rob
tags: [software,tools]
---

Recently, the drunkenpacket had the need to unburden himself of a
large supply of paper marked with various interesting (but obviously
obsolete) information storage squiggles.  Having serenditiptious
access to a XEROX with a bulk sheet scanner attachment, the packet
could not resist the obviously technical temptation: scan the
informative squiggles (we think this is called *printing* or
*writing*).  Like all dp side projects, this one seemed to immediately
explode with dependencies.  Read on for all of the gory details...

# Single Sided Scanning
First off, we soon noted that our paper was frequently squiggled on
both sides.  But our XEROX sheet scanner would only scan one side off
each paper sheet as it drew down from the stack of paper in the sheet feeder.

The solution was simple: scan the document going one way, giving a
page sequence *1, 3, 5, ..., 2(n-1) - 1, 2n-1.* etc.  Then, because dp
dislikes paper cuts and didn't feel like inverting the order of the
pages, we simply scanned the pages in reverse order from the end of
the document so that the even pages have the order *2n, 2(n-1), ...,
4, 2*.

Time passed. Jams were handled. The air reeked of toner because the
XEROX insists on printing scan status sheets.  (We're scanning to
reduce paper right? So, let's get a printed page summarizing the
result of doing a scan.  Right?  And they call it *The Document
Company*.)

# Back at the Ranch
Meanwhile, back at the ranch (that would be the workstation actually)
we find our mailspool jam-packed with documents.  The XEROX has
emailed us a PDF for each scan.  Glad the mail server could handle
those multiple 12MB PDF files. I'm sure the sysadmins are really
loving dp about now.  (Given the price of disk, why isn't there a
NFS/CIFS server on the XEROX?)

As for what's in the email: one PDF/email, each one containing pages
as discussed in the single sided section above.  *All with the same
name.*  Please oh XEROX usability people, think about what one might
want to do with the scanned documents: perhaps save them all into
a directory?  All at once.  without re-naming each one of them.

# Assembly
So, after saving each PDF, one at a time, and tediously renaming
them, we have two PDFs: the odd pages in ascending order and the
evens in descending order.  We here at drunkenpacket assumed that
merging these together would be easy.

We were wrong.

Preview doesn't provide any convenient interface for merging,
rearranging, splitting or otherwise organizing a giant PDF file of
image scans.









