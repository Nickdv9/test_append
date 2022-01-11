// many different ways
/*
document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow';
document.getElementById('btn').style.color = 'red';
*/

// assign a variable
const element = document.getElementById('element');
// do something

document.querySelector('element'); // do something

// window object (this is where the document comes from)
console.log(window); // once we setup our js file and we include it in index.html
// we have access to a global window object, and within that obj there are multiple properties
// one of those is document property which is a giant object in itself
// within that doc prop, we have access to methods and other properties like getElementById

// once we select an element, we get a node object or a node-list, which is an arraylike object

let btn = document.getElementById('btn');
const name = btn.nodeName; // node obj has prop nodename
const css = btn.style; // on my node obj, I have a prop style
console.log(btn);
console.log(name);
console.log(css);


// window object = browser api (window - current tab we're operating)
// within window obj, we have document

// when JS cannot find a prop or a method it will always look in window obj
console.log(window);
// document is an object itself that comes with the window
// if window represents the tab, document represents the document that we have
// so we can access the html elements n such
console.log(document);
console.dir(document); // returns the properties/methods we have on the node object that we're selecting
// in this case the document itself


// getElememtById('element');
const h1 = document.getElementById('title');
h1.style.color = 'red';

btn = document.getElementById('btn');
btn.style.backgroundColor = 'blue'
btn.style.color = 'white'

// document.getElementById('btn').style.backgroundColor = 'blue';
// document.getElementById('btn').style.color = 'white';


// getElementsByTagName('tagname');
// returns node-list = array-like object
// we can select index and use length property but not array methods like forEach
// but we can use traditional for loop or use transform our nodelist (ES6) ...
const headings = document.getElementsByTagName('h2');
console.log(headings); // returns a node-list, an arraylike object
headings[0].style.color = 'red';
console.log(headings.length);

const items = document.getElementsByTagName('li');
items[1].style.color = 'orange';

const betterItems = [...items];
betterItems.forEach(function (item) {
    console.log(item);
});

console.log(items); // nodelist
console.log(betterItems); // transformed into array


// getElementsByClassName('classname');
// node-list 

const listItems = document.getElementsByClassName('special');
console.log(listItems);
listItems[1].style.color = 'pink';


// querySelector('any css'); - selects single element
// querySelectorAll('any css') - selects all
// can use forEach here
let result = document.querySelector('#result');
result.style.backgroundColor = 'brown'

const item = document.querySelector('.special');
console.log(item); // gets only first instance of special

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

const listLIs = document.querySelectorAll('.special');
console.log(listLIs);

// comment below for orange to show in pink
listLIs.forEach(function (item) {
    console.log(item);
    item.style.color = 'black';
});


// Traverse DOM tree
// there's going to be times when we cannot directly use our methods
// childNodes
// children
// firstChild
// lastChild

result = document.querySelector('#result');
const allChildren = result.childNodes;
console.log(allChildren); // prints whitespace above and below each li as text

const children = result.children;
console.log(children); // prints only children

console.log(result.firstChild); // whitespace so #text
console.log(result.lastChild); // whitespace so #text :(

// parentElement
const head = document.querySelector('h4');
console.log(head.parentElement); // inner_div
console.log(head.parentElement.parentElement); // outer_div
console.log(head.parentElement.parentElement.parentElement); // body

const parent = head.parentElement;
parent.style.color = 'red'; // applies to Hello inner_div and Another element inside inner_div

// previousSibling
// nextSibling
// returns whitespace
let first = document.querySelector('.first');
console.log(first);

let second = first.nextSibling;
console.log(second); // gives whitespace
// so we do the following
second = first.nextSibling.nextSibling.style.color = 'red';
console.log(second);

let last = document.querySelector('#last');
let third = last.previousSibling.previousSibling;
console.log(third);

console.log(last.nextSibling.nextSibling); // null

// previousElementSibling
// nextElementSibling
// we can directly grab the element without using nextSibling.nextSibling
first = document.querySelector('.first');
first.nextElementSibling.style.color = 'magenta';


// nodeValue
// textContext

const new_item = document.getElementById('special_st');
const value = new_item.nodeValue; // thus we use new_item.childNodes[0].nodeValue
console.log(value); // this gives null
console.log(new_item.childNodes); // NodeList [ #text ]
// so to get the value inside the text we do the following
console.log(new_item.childNodes[0].nodeValue);

const easyVal = new_item.textContent;
console.log(easyVal); // directly gets the node value


// get attribute
// set attribute
const firstVal = document.querySelector('.first_attr');
const classVal = firstVal.getAttribute('class');
console.log(classVal); // first_attr

const idVal = firstVal.getAttribute('id');
console.log(idVal); // first_id

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink);

const lastVal = link.nextElementSibling;
lastVal.setAttribute('class', 'first_attr');
lastVal.textContent = 'i now have a class of first_attr'
console.log(lastVal);

const links = document.querySelectorAll('.first_attr');
console.log(links);


// className
// classList

const first_ele = document.getElementById('first_ele');
const second_ele = document.getElementById('second_ele');
const third_ele = document.getElementById('third_ele');

const firstClassVal = first_ele.className;
console.log(firstClassVal);

second_ele.className = 'colors';
second_ele.className = 'text'; // however this overrides the colors class we applied above

// solution? use classList or something like 'colors text'
// third_ele.classList.add('colors');
// third_ele.classList.add('text');
third_ele.classList.add('text', 'colors');
const thirdClassVal = third_ele.classList;
console.log(thirdClassVal);

third_ele.classList.remove('text');
console.log(thirdClassVal);

let res = third_ele.classList.contains('colors');
if(res) {
    console.log("Hello! I contain colors");
} else {
    console.log("Hello! I do not contain colors :(");
}


// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)
// insertBefore

const result3 = document.querySelector('#result3');

// create empty element
const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('a simply body div');
// now we want to place the created text inside the bodyDiv
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);
// document.body.insertBefore(bodyDiv, result3); // (what to insert, where to insert)

// adding a new element to result3 div
console.log(result3.children);
const new_heading = document.createElement('h2');
const new_heading_text = document.createTextNode('dynamic heading');
new_heading.appendChild(new_heading_text);
new_heading.classList.add('blue');
/*
const h_first = document.querySelector('.red');
result3.insertBefore(new_heading, h_first);
*/
result3.appendChild(new_heading);
result3.appendChild(new_heading);

console.log(result3.children);
