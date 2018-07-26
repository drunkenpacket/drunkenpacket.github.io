---
title: TextMate and codesearch
date: 2010-12-23 21:17:07
tags: [software, utility]
---

<div class='post_body'><p>The packet is fickle: always I am willing to switch to a new
development workflow. Definitely if it&rsquo;s better. Or even if it&rsquo;s just
different. Lately, I have been exploring use of
<a href="http://macromates.com/">TextMate</a>.  I use to use (and maintain my own
version of) <a href="http://www.cse.yorku.ca/~oz/wily/">wily</a> but given that a
a three button mouse is mandatory to efficient use, it is a challenge
to use on planes, trains, etc. Other posts will expand on my editor
angst &mdash; Acme vs Wily and the absence of source highlighting for
example. But this is sufficient background for the now.</p>

<p>Anyway, back to TextMate. It has a lovely bundle scheme that permits
defining all kinds of interesting new features. I am please to have
completed my first new command. It is tiny and needs other components.
A small step. But maybe useful. The packet has been working on WebKit.
And <a href="http://codesearch.google.com/codesearch?vert=chromium">Google CodeSearch</a>
has ever so nicely decided to index WebKit&rsquo;s source code. So, I made a
codesearch command:</p>

<div class="CodeRay">
  <div class="code"><pre>#!/usr/local/bin/rc
if ( ~ $TM_SELECTED_TEXT ()) {
    # this is one big URL with a single var injected.
    open 'http://codesearch.google.com/codesearch?as_q='\
    ^$TM_CURRENT_WORD^\
    '&amp;btnG=Search+Code&amp;hl=en&amp;vert=chromium&amp;\
    filesuggest=&amp;as_lang=&amp;as_filename=&amp;as_class=&amp;\
    as_function=&amp;as_case='
} else {
    # this is one big URL with a single var injected.
    open 'http://codesearch.google.com/codesearch?as_q='\
    ^$TM_SELECTED_TEXT^\
    '&amp;btnG=Search+Code&amp;hl=en&amp;vert=chromium&amp;\
    filesuggest=&amp;as_lang=&amp;as_filename=&amp;as_class=&amp;\
    as_function=&amp;as_case='
}</pre></div>
</div>

<p>with input being <em>Selected Text</em> or <em>Scope</em> (Is this right?), bound to
^/. And presto! I can ^/ on a type name and look it up. Extra handy
this is in WebKit given the paucity of comments. (They make you weak
don&rsquo;t you know.)</p>

<p>All this material is however merely prelude to the main event. We have
a one-directional link here: from TextMate to CodeSearch. What about
the other side?  That will be more interesting. My general approach
will be as follows:</p>

<ul>
<li><p>Create textmate URL scheme links in the output of CodeSearch for
everything that I could imagine clicking on that would take me back to
TextMate.  This I can do via a Chrome extension.  The details will
appear here. Soonish. (And if you follow this blog, you&rsquo;ll know what
kind of precision is associated with this time estimate.)</p></li>
<li><p>Use the <a href="https://github.com/mbhutton/chrome-duplicate-tab-detector">chrome-duplicate-tab-detector</a>
extension to stop tab-itis from expanding for each search. (Or is it
feature to have lots?) Maybe it&rsquo;s a feature.</p></li>
</ul></div>
