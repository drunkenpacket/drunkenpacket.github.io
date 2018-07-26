---
title: "Going Left or Going Right"
author: Rob
date: 2006-06-24 13:00:00
tags: [software,coding,lisp,statistics]
---

# Background
Some time ago at work, I had the occasion to move offices. There
were a number of reasons for this.  However, the reason is not
particularly germane. Here, we are concerned with a much more
important issue: the new route to the breakroom.

There are now two paths to the breakroom.  The choice is agonizing.
Do I want to go left or right? The routes seem almost the same
length.  There are no coworkers whose presence necessitate one
particular route.

Obviously I need to add some empiricism to my life and determine
the shortest route as laziness reigns supreme.  (Some would euphemize
laziness as *optimization* or *efficiency*.)  (Perhaps I could even 
persuade my manager of this?)

My solution: count steps going left and going right, compute a
two-tail null test (Student's T-test) on them to see if they represent
different means and report the result.

# Data

<table>
	<tr>
		<td><b>Right</b></td>
		<td><b>Left</b></td>
	</tr>
	<tr>
		<td>67</td>
		<td>80</td>
	</tr>
	<tr>
		<td>66</td>
		<td>76</td>
	</tr>
	<tr>
		<td>65</td>
		<td>77</td>
	</tr>
	<tr>
		<td>64</td>
		<td>79</td>
	</tr>
</table>

# Long Tangent
So, this was not so simple.  Not for me was to get out my trusty
HP calculator and do the necessary math.  I couldn't even choose
to write some simple code. Instead, I decided that would install a
nice statistics package and do simple statistics with *style*.

So, I embarked on a long painful journey:

1.	I set up [ASDF][ASDF] and [ASDF-install][ASDF install].
	(Yes, I must do statistics in LISP.  The packet lithps when
	drunk.)  Take-away: the [ASDF-install tutorial][ASDF install tutorial] was very
	helpful but didn't really address the whole [gpg][gpg] integration
	issue. And restarts in [OpenMCL][OpenMCL] are confusing for the
	neophyte.


2.	I installed [cl-mathstats][cl mathstats].  This is a package that appears
	under the hood to be a bit of Frankenstein: lots of pieces
	from different places.  And the docs don't actually help
	me very much but then perhaps I am simply silly. (In a
	perfect world, I would offer some patches against [TINAA][TINAA]
	that have a different CSS aesthetic.)


At last, I was ready to do some statistics in style:

```lisp
( import 'cl-mathstats:mean )
( import 'cl-mathstats:variance )
( import 'cl-mathstats:data-length )
( import 'cl-mathstats:students-t-significance )

( defun left-or-right ( right-v left-v ) 
	"uses statistical tools from cl-mathstats to do
	with style what I should have done with a pencil:
	perform a two-tail null hypothesis test comparing
	right-v and left-v.

	returns the probability that the normally distributed
	populations from which samples right-v, left-v are
	drawn have different means."
	( let
		(( sv  ( /  
			( abs ( -  (mean right-v ) ( mean left-v )))
			( sqrt  ( + 
				( / ( variance right-v  ) ( length right-v ))
				( / ( variance left-v ) ( length left-v ))))))
		( dof 
			( + ( length right-v )  ( length left-v ) -2 )))
			
			( students-t-significance sv dof :both )))

( left-or-right  '(   67 66 65 64  ) '(   80 76 77 79 ) )
```

Result
=====

Ah ha!  To a 0.9999 significance level, going right and left differ!
Wow. So much effort to save 12 whole steps by going right, albeit
at least three times a day. I am *so* efficient. I have optimized
my life further. Soon, I will only travel under rainbows and wear
a woven bamboo hat.


[pk]: 				http://www.imdb.com/name/nm0000475/
[ASDF]:			http://constantly.at/lisp/asdf/index.html#Top
[ASDF install]:			http://www.cliki.net/ASDF-Install
[ASDF install tutorial]: http://cclan.cvs.sourceforge.net/*checkout*/cclan/asdf-install/doc/index.html
[gpg]:				http://www.gnupg.org/
[OpenMCL]:		http://openmcl.clozure.com/
[cl mathstats]:		http://common-lisp.net/project/cl-mathstats/
[TINAA]:			http://common-lisp.net/project/tinaa/
