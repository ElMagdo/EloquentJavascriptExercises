# A vector type

Write a class `Vec` that represents a vector in two-dimensional space. It takes
x and y parameters (numbers), which it should save to properties of the same
name.  
Give the Vec prototype two methods, `plus` and `minus`, that take another
vector as a parameter and **return a new vector** that has the sum or difference
of the two vectors’ ( this and the parameter) x and y values.  
Add a getter property `length` to the prototype that computes the length of
the vector—that is, the distance of the point (x, y) from the origin (0, 0).  

# Groups

The standard JavaScript environment provides another data structure called
`Set`. Like an instance of `Map`, a set holds a collection of values. Unlike Map, it
does not associate other values with those—it just tracks which values are part
of the set. A value can be part of a set only once—adding it again doesn’t have
any effect.  
Write a class called `Group` (since Set is already taken). Like Set, it has `add`,
`delete`, and `has` methods. Its **constructor** creates an empty group, add adds
a value to the group (but only if it isn’t already a member), delete removes
its argument from the group (if it was a member), and has returns a Boolean
value indicating whether its argument is a member of the group.  
Use the `===` operator, or something equivalent such as `indexOf`, to determine
whether two values are the same.  
Give the class a static `from` method that takes an **iterable object** as argument
and creates a group that contains all the values produced by iterating over it.  

Iterable groups
Make the Group class from the previous exercise iterable. Refer to the section
about the iterator interface earlier in the chapter if you aren’t clear on the
exact form of the interface anymore.
If you used an array to represent the group’s members, don’t just return the
iterator created by calling the Symbol.iterator method on the array. That
would work, but it defeats the purpose of this exercise.
It is okay if your iterator behaves strangely when the group is modified during
iteration.
Borrowing a method
Earlier in the chapter I mentioned that an object’s hasOwnProperty can be
used as a more robust alternative to the in operator when you want to ignore
the prototype’s properties. But what if your map needs to include the word
"hasOwnProperty" ? You won’t be able to call that method anymore because
the object’s own property hides the method value.
Can you think of a way to call hasOwnProperty on an object that has its own
property by that name?