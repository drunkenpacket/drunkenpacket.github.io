---
title: Rollovers
date: 2006-11-16 07:13:25
author: Rob
tags: [software,webdev]
---

While writing another blog article (much delayed by too much
stumbling) it has come to me that I want a way to make some diagrams
that look like a bit like some of the ones found at [Instructables][instructables].  
In particular, [this example][instructables example] shows what I mean.

Here is a screen shot if the example has been moved, altered, doesn't render in your browser
etc.

![Example from Instructables][instructables_example]

Observe the following:

*	there is an image
*	it has some high-lighted rectangles
* 	If (with the benefit of Instructables' JavaScript and CSS)
	I put the cursor over them, it high-lights the region and
	pops up a description of it

So, how can I do this?  Some googling suggested that using multiple
images, an image map construct and a JavaScript based roll-over
control would do the trick.

Except I don't like this approach very much. First, it's so 20th
century with its use of old-fashioned roll-overs. Second, it means
that I have to prepare a potentially large number of images: one
for each high-lighted area.  I suppose this isn't that bad really
but it seems tedious.  Perhaps the browser could draw the rectangles.

A number of ideas on how to do this occurred to me. In particular,
I went on a tangent to explore the `<canvas>` tag for this purpose. I had
the following notion:

1.	put the image on the screen inside of [the `<canvas>` tag][canvas] on image load.   ([Apple's `<canvas>` reference][canvas_apple])

2.	Create an image map object in some external program.  (Why an image map? Well,
	I have an external program that can actually save its output

3.	Write JavaScript that (in the client) reads the DOM for the image map object
	and draw the overlays above the image using the `<canvas>` primitives.
	
About now, people more up to date on their modern web technologies will be chortling
at my naive approach...  Well pish-posh to you!  Yes it was the wrong approach. But it
was fun!  But that leaves us with the burning question: how did I actually do it.

How I did it
------------------
I put the image inside a `<div>` of class `highlite_image_map` like so:

```html
<div class="hilite_image_map">    
	<img border=0 src="sample_image.jpg" >
	<!-- I want to have selecting the object highlight the related text -->
	<!-- specify the target in both li and div -->
	<div id="image.flower.centre" class="hilite_rectangle" 
	  style="top: 105px; left: 100px; height: 101px; width: 101px;">&nbsp;</div>
	<div id="image.flower.mushroom" class="hilite_rectangle" 
	  style="top: 324px; left: 201px; height: 64px; width: 76px;">&nbsp;</div>
	<div id="image.flower.stone" class="hilite_rectangle" 
	  style="top: 311px; left: 0; height: 72; width: 63;">&nbsp;</div>

</div>
```

with a separate `<div>` for each of the rectangles on the image. Each
of the hight-light rectangles has its position specified with its
`style` attribute specified inline. This augments the remainder of the
`hilite_rectange` CSS style.

The `hilite_rectangle` CSS style specifies the common aspects of the
high-light rectangles:

```css
.hilite_rectangle {
	position: absolute;
	border-style: solid;
	border-color: yellow;
}
```

In particular, the `position` attribute must be `absolute` so that the
additional style attributes shown inline in the `<div>` tag will position
the rectangles.

A source of frustration for me was figuring out how make these absolute
boxes be positioned with respect to the image.  My rectangles were 
positioned with respect to the `<body>` and not the enclosing `hilite_image_map`
`<div>`. 

I eventually (the drunken packet can be slow) observed that the enclosing box is
the nearest enclosing box that has a non-default `position` attribute.  The `hilite_image_map`
style class addresses this. 

```css
.hilite_image_map {
	display: block;
	position: relative;
}
```

Finally, I created JavaScript that alters the the style of the
high-lite rectangles (and the related explantion marked for a
rectange `id=x` with `id=x.description`) on mouseover.  The general
idea is to have a `onmouseover` and `onmouseout` event handler set
for each of the description texts and high-light rectangles. Each
event handler invokes the shared underlying update code which updates
both the description text (the `textOid`) and the high-light rectangle
(the `graphicOid`).

```javascript
function highLightOn( textOid , graphicOid ) {
	// Learn how to replace the entire style sheet here
	debugLog( "running highLightOn: " + textOid + "  " + graphicOid );
	if( textOid != null ) {
		debugLog( "am attempting to set new background on node: " + textOid  + " from " + 
			textOid.style.backgroundColor);
		textOid.basicBackground = textOid.style.backgroundColor;
		textOid.style.backgroundColor = '#a0a0a0';
	}

	if( graphicOid != null ) {
		graphicOid.style.borderWidth = "thick";
	}
}
```

The setup code adds the `textOid` to the rectangle `<div>` and the `graphicOid` to the
text blocks marked with the `id=x.description` property.  This property of the DOM where
one can just add additional fields to an object in the DOM is incredibly handy.

Example
-------------
Here is an example of it all put together using a lovely flower picture:

<script src="highlights.js" language="javascript" type="text/javascript"></script>
<link type="text/css" rel="stylesheet" href="highlights.css">

<div class="hilite_image_map">    
	<!-- what if you make the image be positioned absolute inside of the containing box -->
	<img style="position: relative; "border=0 src="sample_image.jpg" >
	<!-- I want to have selecting the object highlight the related text -->
	<!-- specify the target in both li and div -->
	<div id="image.flower.centre" class="hilite_rectangle" 
	  style="top: 105px; left: 100px; height: 101px; width: 101px;">&nbsp;</div>
	<div id="image.flower.mushroom" class="hilite_rectangle" 
	  style="top: 324px; left: 201px; height: 64px; width: 76px;">&nbsp;</div>
	<div id="image.flower.stone" class="hilite_rectangle" 
	  style="top: 311px; left: 0px; height: 72px; width: 63px;">&nbsp;</div>

</div>

<ul>
	<!-- design pattern:  the .description is added... -->
	<li id="image.flower.centre.description">center of flower</li>
	<li id="image.flower.mushroom.description">the mushroom in the corner</li>
	<li id="image.flower.stone.description">the stone under the flower</li>
</ul>


Wrap up
-------------
Onwards to more rambling. Except that now I can have labeled portions.  



[canvas_apple]: http://developer.apple.com/documentation/AppleApplications/Reference/SafariJSRef/Classes/Canvas.html
[canvas]: http://en.wikipedia.org/wiki/Canvas_(HTML_element)
[instructables]: http://www.instructables.com/
[instructables example]: http://www.instructables.com/id/EJ9HXQ2V7PEPH67OHS/
[instructables_example]: instructables_example.png
[basic_rollover]: http://www.irt.org/articles/js026/index.htm#4
