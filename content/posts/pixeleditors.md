---
title: Macintosh Image Editors
author: Rob
date: 2008-07-10 13:00:00
tags: [software,macintosh,graphics]
---

Introduction
=========
The packet wanted to change the size of an image.  (You might notice
the result in a previous post.)  As always, we over-complicated the
task.  You see, rather than settling for just any editor, we here
at drunkenpacket wanted an image editor that was *satisfying*.

So, we tried some out.  And will give you the benefit of our opinion.
Even though you didn't ask.  The basis of comparison was some sort
of non-objective sense of *snappiness* and responsiveness of dragging
a selected segment of an image.  The image in question was chosen
to be representative of what would be produced by a reasonable mid-range
digital camera: a 2304 by 3456 pixel JPEG.  (No, we'll not show you
the image.  Use your imagination.)

We selected a large chunk of it, made this a new layer and panned
around the image at full size as one might be wont to do when looking
for all of the dust particles thoughtfully included by the scanner.

The Candidates
============

*    [Imagewell][iw]
*    [Pixelmator][pm]
*    [Iris][iris]
*    [Acorn][acorn]
*    [Seashore][sea]
*    [Shake][shake]


There has been (relatively recently) a spate of new Macintosh image
editors.  Others have written serious reviews of them.  This is not
a serious review.  But it might suggest some novel alternatives.

Imagewell
--------
We had previously used a free version of Imagewell for all our
blog-related image twiddling. (Like removing the parts we didn't
want you see.  No, not the naughty bits. More like our thumbs bulging
enormously into the phone camera frame.)

Imagewell does what we need for DP image processing: some simple
pan, resize, crop etc. Except that it use to be free and now it
isn't.  The packet finds himself oddly annoyed by this sort of
infinite inflation. So, we skipped it.

Pixelmator
--------
The packet noted how the marketing contents for Pixelmator make
prominent use of supermodels (or at least young women pretending
to be) in its sample screen shots.  This sums up everything wrong
with Pixelmator.  It's all about looking beautiful and not necessarily
about being particularly useful.

In our simple test, while dragging a rectangular layer proceeded
smoothly,  (That would be CoreGraphics for you perhaps.) the non-rectangular selection
drag chugged along.  The packet refuses to pay for image processing
software today that is not as fast as MacPaint on his Mac SE.

Purists may blither on about how this is an unfair comparison: the
image of today is at least 4bytes/pixel instead of 1b.   Pish posh:
Core duo 2 can sustain around 8 billion instructions/second vs the
68000's paltry 4 million and I have a GPU.  My drags should go fast.  Always.

Iris
---
We were tired and wanted more coffee so we looked at the website,
said *isn't that nice* and closed the window.

Acorn
----
We so wanted to like Acorn. It has such a rational interface compared
to Pixelmator.  The author has really tried to build a better paint
program.  In terms of usability, Acorn is the best.  One can even
write plugins (in Python no less and the reader already knows that
the packet has a fondness for snakes.)

Only one thing... Acorn was slower than Pixelmator.  The end of a
drag left the CPU meter pegged at a 100% for at least 5 seconds.

Shake
----
We'll talk about using Shake as a paint program again. And have
before.  Shake is way more powerful than all of these other programs.
It drags the layers plenty fast.  But even the packet in a dervish
fit of quixotic tool taste would be willing to admit that it is the
one package here that *doesn't fit with the others.*  It would take
longer for the packet to remember how to import an image into Shake
than the the entire task would take in a more normal piece of
software.

Seashore
------
We had looked at Seashore before. The website does not impress.
The previous version of the software had seemed, well, sparse.
(Especially after the baroque glitz of Pixelmator.)

But hey, the packet is open minded. Sometimes.

Seashore is open source.  Free/Libre is good on financial and
ideological grounds.  And it's not too shabby looking either.  And
fast enough. Faster than the others.  Image drags were smooth.  Hmm.
Perhaps there's something to be said about a strong underlying core
image representation as a set of tiles?  Perhaps the packet should
contribute.

Conclusion
=========
Seashore for our blog-related image fix-ups.  And maybe we'll get out 
our coding beach towel.  


[iw]:    http://xtralean.com/IWOverview.html
[pm]:    http://www.pixelmator.com/
[iris]:     http://nolobe.com/iris/
[acorn]:   http://flyingmeat.com/acorn/
[sea]:      http://seashore.sourceforge.net/feature.php
[shake]:  http://www.apple.com/shake/
