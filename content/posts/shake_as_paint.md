---
title: Shake As Paint
date: 2006-11-18 07:13:25
author: Rob
tags: [software,macintosh,pixeleditor,shake]
---

There is yet to be an Intel version of PhotoShop on the Mac OSX
platform. However, Apple has released a native version of Shake.
I have always been entranced with Shake and am wondering if I can
use it as an alternative to PhotoShop for  image editing tasks?

To answer this question in a series of subsequent blog entries, I
will use the motivating example of preparing some mock-ups of a web
site.  This will require altering, cropping, transforming and
combining a number of different images into a number of different
output images.

I am in no way a PhotoShop expert but belive that I would know  how
to proceed with PhotoShop.  But, as I start using Shake in this
regards, I see that Shake is <em>very different</em>.  It is
sufficiently unfamiliar that I cannot yet tell if I am simply
unfamiliar with how to do things or if Shake is woefully unsuited
for this task.

Let me begin with two important tasks:  loading images and selecting
parts of them.  Once I have mastered these basic skills, we can
stumble our way back to other more complicated image transformations.

The diagram shows a node graph from shake. Shake expresses operations
as a (CS speak) graph where image data flows from the output of
nodes (their bottom) to the input of other nodes (their tops.) Given
their shape, I like to think them as sea cucumbers.

<script src="highlights.js" language="javascript" type="text/javascript"></script>
<link type="text/css" rel="stylesheet" href="highlights.css">


<div class="hilite_image_map">    
	<img style="position: relative;" border=0 src="node_sample.jpg" >
	<div id="image.graph.filein" class="hilite_rectangle" 
		style="top: 4px; left: 116px; height: 91px; width: 80px;">&nbsp;</div>
		
	<div id="image.graph.resultdisplay" class="hilite_rectangle" 
		style="top: 220px; left: 25px; height: 65px; width: 259px;">&nbsp;</div>
		
	<div id="image.graph.cropping" class="hilite_rectangle" 
		style="top: 122px; left: 100px; height: 70px; width: 76px;">&nbsp;</div>
	
	<div id="image.graph.quickpaint" class="hilite_rectangle" 
		style="top: 122px; left: 15px; height: 64px; width: 76px;">&nbsp;</div>

	<div id="image.graph.rotoshape" class="hilite_rectangle" 
		style="top: 4px; left: 200px; height: 165px; width: 80px;">&nbsp;</div>

	<div id="image.graph.gradient" class="hilite_rectangle" 
		style="top: 45px; left: 306px; height: 127px; width: 65px;">&nbsp;</div>
</div>


Loading
------------
The first step is to load an image into Shake.  To do this, one
uses a <em id="image.graph.filein.description">FileIn</em> node
(drag over the diagram to have a tasty sea cucumber in the top left
pointed out).   (The File menu is not involved.  (You may recall
that I said that it was different!)  The process was not however
complicated: make a FileIn node and point it at a file in one of
the supported file formats. No problem.  This is different but
certainly no harder than opening a file in PhotoShop.

As you might expect, <em>FileIn</em> are source nodes: they pull image
from disk and emit it out their bottom. 

Selecting
--------------
Next, I want to select parts of my images.    I have explored three
different techniques each of which is high-lit as you drag around
on node diagram above.  They are respectively *QuickPaint*
*CCrop*  and *RotoShape*.

The <span class="hilite_txt_target" id="image.graph.resultdisplay.description">bottom
nodes</span> takes the result of the three selection processes and
layers it over <span class="hilite_txt_target" id="image.graph.gradient.description">a
gradient</span> so you can see the result.

More shake background:  every image in Shake has colour channels
including an alpha channel.  Setting the alpha to white makes the
image opaque and (conversely because it's a linear world) black
makes the image transparent.  There's some sort of subtlety around
pre-multiplication but it hurts my brains.  Consequently, to select
part of an image, it suffices to wire together some sea cucumbers
with little noodles so that only the desired parts of an image have
an alpha of 1.

QuickPaint
-----------------
<div class="hilite_txt_target"  id="image.graph.quickpaint.description" >

<p>So, one reasonable way to add an alpha channel is to put a <em>QuickPaint</em>
node downstream from an FileIn node.    Then, I can paint an alpha
channel for the image. This permits me to select an arbitrary mushy
(as constrained by the painting skills of a drunken packet) area.
Note how a tablet makes this work oh so much better.  Fortunately,
the tablet drivers are universal now.  Here's the result. </p>

<p>
Note however the use of a MMult node downstream from the QuickPaint
node.  This node multiplies the alpha (coming form QuickPaint) times
the RGB values in the image so as to disappear image where the alpha
is 0.</p>

</div>

![Example of QuickPaint node](pg29_qp.jpg)

Cropping
--------------
<div class="hilite_txt_target" id="image.graph.cropping.description">
I can also use the <em>CCrop</em> node to extract a nice aligned
rectangle of the original image and then use a <em>Move2D</em> to
move it around.

No MMult is needed here. Instead, I just use a SetAlpha cucumber to fix the alpha
of the cropped region before layering it above the colour ramp background.
</div>

![Example of Cropping node](pg29_crop.jpg)

RotoShape
----------------
<div class="hilite_txt_target" id="image.graph.rotoshape.description" >

Finally, I can create editable spline-bounded regions with <em>RotoPaint</em>.
The spline tools are extensive and with the ramp tools, I can easily create a 
partially selected (masked) area. 

Having produced my nice black and white shape, I need to actually use it as a 
selection. The Copy3 cucumber permits inserting the alpha from the RotoShape into
the image result and (as with QuickPaint), the MMult multiplies the alpha in to
mask the image. 

Here is the result:
</div>

![Example of RotoShape node](pg29_roto.jpg)

Summary
--------------
Cry-baby whining: I miss the magic wand tool!  Of all of these
techniques, RotoShape is clearly the one that gives the most
PhotoShop-like selecting.  Even better, becasue everything in is
non-destructive in Shake, I can go back at any time and alter (or
even animate) the rotoshape.  The ability for creating gradients
is powerful and seems useful for nicely feathered selections.


Future Work
------------------
Obviously, this is the just beginning. Shake is a complicated
program.  I am only beginning to explore its possibilities.  However,
I already believe that Shake needs a magic wand tool for making
masks.  I imagine a node that offers something like the following
features:


*	A defined point is the source of the magic wand.  This
	point can be animated or attached to a tracker. (Wish I
	knew how they worked.  Maybe later.)
	
*	Emits an image (which could be used as a mask) corresponding
	to all pixels in the selected channels that are of the
	sample colour. The tolerance, edge thickiness, etc. would
	be adjustable.

Sounds like the drunken packet has a programming project.  

