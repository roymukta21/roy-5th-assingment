1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:

getElementById("id") → selects one element by its unique ID. Returns a single element.

getElementsByClassName("class") → selects all elements with that class. Returns an HTMLCollection .

querySelector("selector") → selects the first element that matches any CSS selector.

querySelectorAll("selector") → selects all elements that match a CSS selector. Returns a NodeList .

2. How to create and insert a new element into the DOM:

# 1. Create element

let newDiv = document.createElement("div");

# 2. Add content or attributes

newDiv.textContent = "Hello World!";
newDiv.className = "my-class";

# 3. Insert into DOM

document.body.appendChild(newDiv);

It also use insertBefore or prepend to place it elsewhere.

3. Event Bubbling:
   When you click an element, the event starts at that element and then bubbles up through its parent elements, all the way to <html>.
   Example: clicking a button inside a div will also trigger click events on the div and body unless stopped.

4. Event Delegation:
   Instead of adding event listeners to many child elements, you add one listener to a parent, and handle events from its children using event.target.

Why useful:

Saves memory (fewer listeners)

Works for dynamically added elements

Example:

document.getElementById("parent").addEventListener("click", (e) => {
if(e.target.tagName === "BUTTON") {
alert("Button clicked!");
}
});

5. Difference between preventDefault() and stopPropagation():

preventDefault() → stops the default browser action (like form submission, link navigation).

stopPropagation() → stops the event from bubbling or capturing up/down the DOM tree.
