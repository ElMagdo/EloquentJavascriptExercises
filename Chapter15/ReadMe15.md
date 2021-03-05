# Balloon  

Write a page that displays a balloon (using the balloon emoji, 🎈 ). When you
press the `up arrow`, it should **inflate** (grow) 10 percent, and when you press the
`down arrow`, it should **deflate** (shrink) 10 percent.  
You can control the size of text (emoji are text) by setting the `font-size`
CSS property (`style.fontSize`) on its parent element. *Remember to include a
unit in the value*—for example, pixels (`10px`).  
The key names of the arrow keys are "`ArrowUp`" and "`ArrowDown`". Make sure
the keys change only the balloon, without scrolling the page.  
When that works, add a feature where, if you blow up the balloon past a
certain size, it explodes. In this case, exploding means that it is replaced with
an 💥 emoji, and the event handler is removed (so that you can’t inflate or
deflate the explosion).  

Mouse trail
In JavaScript’s early days, which was the high time of gaudy home pages with
lots of animated images, people came up with some truly inspiring ways to use
the language.
One of these was the mouse trail—a series of elements that would follow the
mouse pointer as you moved it across the page.
In this exercise, I want you to implement a mouse trail. Use absolutely
positioned <div> elements with a fixed size and background color (refer to the
code in the “Mouse Clicks” section for an example). Create a bunch of such
elements and, when the mouse moves, display them in the wake of the mouse
pointer.
There are various possible approaches here. You can make your solution as
simple or as complex as you want. A simple solution to start with is to keep
a fixed number of trail elements and cycle through them, moving the next one
to the mouse’s current position every time a "mousemove" event occurs.