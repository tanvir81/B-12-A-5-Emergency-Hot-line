6. Answer the following questions clearly:
   Q.1 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

   These four selectors are used to find and select elements, but they do it differently:
   getElementById selects a single element by its unique ID.
   getElementsByClassName selects a live collection of elements with the same class name.
   querySelector selects the first element that matches a CSS selector.
   querySelectorAll selects a static collection of all elements that match a CSS selector.

   Q.2 How do you create and insert a new element into the DOM?

   First, create the element using document.createElement('tagName').
   For example, to create a new paragraph, use document.createElement('p').

   Then, set its properties, like adding text with textContent.

   Finally, insert it into the existing DOM tree. Use appendChild() to add it as the last child of a parent element or insertBefore() to place it before a specific sibling node.

   Q.3 What is Event Bubbling and how does it work?
   It starts from the target element and moves upwards through its parent elements, then their parents, and so on, traveling all the way up the DOM tree.

   Q.4 What is Event Delegation in JavaScript? Why is it useful?

   Event Delegation is when you put one event listener on a parent element instead of many listeners on its children. This single listener then handles events for all children.

Q.5 What is the difference between preventDefault() and stopPropagation() methods?

the difference between preventDefault() and stopPropagation() methods is

preventDefault()stops the browser's normal action for an event.
For example, it can stop a link from opening a new page or a form from submitting.
when stopPropagation() method stops the event from traveling up or down the HTML elements.
