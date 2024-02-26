# Read Me
[Read me](https://github.com/Kimball-Peterson/startup/blob/main/README.md)

## Notes

### Git Notes
- Git is useful. Use it.

### EC2
- EC2 instance is remote access to a running machine in a different location (N. Virginia in my case).
- EC2 instance can be accessed from my command line.
- Elastic IP allows me to stop the instance if I want to without having a new public IP assigned.
- Server size t3.nano should be adequate (I am using t2).

### HTTP, HTTPS, TLS
- **HTTP:** Hypertext Transport Protocol, non-secure connection, all data sent can be accessed by anyone in the chain of computers used to send info.
- **HTTPS:** Secure Hypertext Transport Protocol - Establishes a secure connection before any data is exchanged. All data encrypted using TLS Protocol.
  - **TLS Protocol:**
    - **Authentication:** Lets each party to the communication verify that the other party is who they claim to be.
    - **Encryption:** Data is encrypted while being transmitted between the user agent and the server, to prevent it from being read and interpreted by unauthorized parties.
    - **Integrity:** TLS ensures that between encrypting, transmitting, and decrypting the data, no information is lost, damaged, tampered with, or falsified.
- **Let's Encrypt and Certificates:**
  - Started by two Mozilla employees, nonprofit seeking to renew web certificates for free.
  - Use a service like Let’s Encrypt and IETF standard ACME protocol. Anyone who owns a domain name can generate and renew certificates for free.
  - Modern browsers expect exclusively HTTPS.
  - By updating the caddyfile to include the different versions of my domain name, HTTPS is possible. Secure connections only.

### HTML
- The two major purposes of HTML are to provide structure and content to your web application.
  - **Block element:** Meant to be a distinct block in the flow of the content structure.
  - **Inline element:** Meant to be inline with the content flow of a block element.
- HTML media elements: img, audio, video, svg, and canvas.
  - Svg and canvas both contain code to render a visual image (even animated).
  - Media tags that reference external media all take URL as an attribute.
    - Can be relative or full path.

### CSS
- Cascading Style Sheets.
- Objective is to style HTML based on user, developer, and browser desires. In modern application styling focuses on helping developers create complex renderings of dynamic content that responds to user actions and the device it is rendered on.
  - Defines rulesets or rules.
  - Rules comprised of:
    - Selector.
    - One or more declarations that represent the property to style with the given property value.
- **CSS -> HTML connection:**
  - Inline: `<p style="color: green">CSS</p>`
  - Style Element: `<style></style>`
  - Link to stylesheet: `<link rel="stylesheet" href="styles.css"/>`
- **Box Model:**
  - Everything is defined as boxes in CSS.
  - When style is applied it is applied to a region of display that is a box.
- **Selectors:**
  - Element Type Selector: uses html element as selector. `body {font-family: sans-serif;}`  
  - Combinators: Descendant Combinators, can be used to target all siblings of something. Ex. `section h2 { color: 		#004400;}`  
    which targets all h2 elements that are within a section block.  
  - Class Selectors: All elements can have zero or more classifications applied to them. If a class summary exists, `.summary { font-weight: bold; } ` targets all with the summary class. Can be combined with class selectors ex. `p.summary { font-weight: bold; }`  
  - ID Selectors: reference the ID of an element. All IDs should be unique within an html document. Prefix the ID with a hash symbol (#). Ex. `#physics { border-left: solid 1em purple; }`  
  - Attribute Selector: select elements based on attributes. `p[class='summary'] { color: red; } `  
  - Pseudo Selector: select based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. Ex. purple highlight bar that appears only when mouse hovers over text ` section:hover { border-left: solid 1em purple; }`  
  - CSS Declarations: rule declarations specify a property and value to assign when rule selector matches one or more elements. https://github.com/webprogramming260/.github/blob/main/profile/css/declarations/declarations.md  
  	- Units: abosolute ( px, in) Relative units (% or parent element, % or minimum viewport dimension (25vmin), or multiplier of size of letter m (1.5rem, em is parents font, rem is root font))  
    - Color: keywords (ex.red)  
    	- RGB hex (#00FFAA22 or #0FA2): Red green blue as hexadecimal with optional alpha opacity  
     	- RGB Function (128, 255, 128, 0.5): Red green blue as percentage or number between 0 and 255, with optional alpha opacity percentage.  
        - HSL (hsl(180, 30%, 90%, 0.5): Hue saturation light and optional opacity. Hue is position on 365 degree color wheel(red is 0 and 255). Saturation is how gray color is, light is how bright.  
  - Fonts: Use this: `@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');`  
- **Responsive:**
	- Viewport tag: `<meta name="viewport" content="width=device-width,initial-scale=1" />` always inlcude for viewport browser settings bypass
	- Float: moves an element to the right or left of its container element and allows inline elements to wrap around it.
 	- Media Queries: Dynamically detects size and orientation of device and applies css rules to represent the html in a way that accomodates the change. `@media (orientation: portrait) {
  div {
    transform: rotate(270deg);
  }
}`
		- Takes one or more predicates separated by boolean operators.
   

### Frameworks
- **Tailwind:** New framework as of 4 years ago. 46% general usage, 78% retention. Uses smaller definitions that are applied specifically to individual HTML elements. Moves a large amount of CSS into the HTML file directly.
- **Bootstrap:** is the champion for frameworks. Has been supported and active for a decade now. Defines the defacto look and feel of most websites. Great for user experience continuity. Difficult to grab attention because somewhat mundane.

### JavaScript
- **Arrays:** Represent a sequence of other objects and primitives. Can be referenced using zero-based index. An array can be created with the Array constructor or using the array literal notation.
```javascript
const a = [1,2,3];
console.log(a[1]);
// OUTPUT: 2
console.log(a.length);
// OUTPUT: 3 
```

- **Functions:**
 
	push:	 Add an item to the end of the array			a.push(4)  
	pop:	 Remove an item from the end of the array		x = a.pop()  
	slice:	 Return a sub-array					a.slice(1,-1)  
	sort:	 Run a function to sort an array in place		a.sort((a,b) => b-a)  
	values:	 Creates an iterator for use with a for of loop		for (i of a.values()) {...}  
	find:	 Find the first item satisfied by a test function	a.find(i => i < 2)  
	forEach: Run a function on each array item			a.forEach(console.log)  
	reduce:	 Run a function to reduce each array item to a single item	a.reduce((a, c) => a + c)  
	map:	 Run a function to map an array to a new array		a.map(i => i+i)  
	filter:	 Run a function to remove items				a.filter(i => i%2)  
	every:	 Run a function to test if all items match		a.every(i => i < 3)  
	some:	 Run a function to test if any items match		a.some(i => 1 < 1)  

 ```javascript
const a = [1, 2, 3];

console.log(a.map((i) => i + i));
// OUTPUT: [2,4,6]
console.log(a.reduce((v1, v2) => v1 + v2));
// OUTPUT: 6
console.log(a.sort((v1, v2) => v2 - v1));
// OUTPUT: [3,2,1]

a.push(4);
console.log(a.length);
// OUTPUT: 4
```
- **DOM:** Document Object Model is object representation of HTML elements that browser uses to render the display. Browser exposes the DOM to external codes to allow you to write programs that dynamically manipulate HTML.  
	- Access to DOM through global variable name `document`  
 	- There is a node in the DOM for everything in an HTML doc. All form a tree with a document node at top.  
  	- DOM Element Interface: Every element in an HTML doc implements the DOM Element Interface, which is derived from 	DOM Node interface. DOM Element interface provides the means for iterating child elements, accessing parent element, 	and changing element's attributes.
  	- ```javascript
  	  function displayElement(el) {
  		console.log(el.tagName);
 		for (const child of el.children) {
    		  displayElement(child);
  		}
	  }

	  displayElement(document);```

  	- CSS selector can be provided to `querySelectorAll` function to select elements from the doc.  
  		- `textContent` property contrains all of element's text.  
  	 	- innerHTML accesses textual representation of an element's HTML  
  	  	- ```javascript
  	  	  const listElements = document.querySelectorAll('p');
		  for (const el of listElements) {
  		  console.log(el.textContent);
		  }
    		```  
  	- Modifying the DOM  
  		- DOM supports ability to insert, modify, delete elements in the DOM.
  	  		- To create element, first create element on DOM document.
  	    		- Insert the new element into DOM tree by appending to an existing element in tree
  	     	- ```javascript
  	          function insertChild(parentSelector, text) {
  		    	const newChild = document.createElement('div');
  		    	newChild.textContent = text;

  		    	const parentElement = document.querySelector(parentSelector);
  		    	parentElement.appendChild(newChild);
  	        	}
				insertChild('#courses', 'new course');
		  ```

  	  	- To delete: call `removeChild` function on parent element
  	   		```javascript
  	     		function deleteElement(elementSelector) {
  				const el = document.querySelector(elementSelector);
  				el.parentElement.removeChild(el);
			}

			deleteElement('#courses div');  
  	     		```
  	  - Injecting HTML: DOM allows entire blocks of HTML to be injected into an element.  
		```javascript
		const el = document.querySelector('div');
		el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
		```  
		- Directly injected HTML as a block of text is a common attack vector for hackers.   
		- IF JAVASCRIPT CAN BE INJECTED ANYWHERE IN YOUR APPLCATION THEN THAT JAVASCRIPT CAN REPRESENT 				  ITSELF AS THE CURRENT USER OF THE APPLICATION.  
		- Make sure all injected HTML cannot be manipulated by a user.  
		- Common injection paths: HTML input controls, URL parameters, and HTTP headers.  
		- Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead 			  of `innerHTML`
  	    
  	  - Event Listeners: All DOM elemenets support ability to attach a function that gets called when an event occurs on 	    the element.  
  	  	- ``` javascript
  	     		const submitDataEl = document.querySelector('#submitData');
			submitDataEl.addEventListener('click', function (event) {
  				console.log(event.type);
			});
  	     	```
  	      	- EL can also be added directly in HTML `onclick`:  
  	      	- ```<button onclick='alert("clicked")'>click me</button>```
**JAVASCRIPT PROMISES**
- Rendering thread of HTML executes on single thread. Means that JavaScript processing on main rendering thread cannot take a long time.  
- Long running, or blocking tasks should use a JavaScript `Promise`  
- `Promise`: Allows the main rendering thread to continue while an action is executed in the background.  
  - Promise is created by calling Promise object constructor and passing an executor function that runs the asynchronous operation. Promise constructor may return before promise executor function runs.  
  - Three promise execution states:
  	- Pending: currently running asynchronously
  	- Fulfilled: Completed successfully
   	- Rejected: Failed to complete
- `setTimout` function - creates a delay in execution of the code.
	- Takes number of milliseconds to wait and a function to call after that amount of time has expired.
- Promise executor takes two functions as parameters, `resolve`and `reject`
	- `resolve`: sets promise to `fulfilled` state
 	- `reject` : sets promise to `rejected` state
 ```javascript
     const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
 }); 
```
- Promise object has three functions:
	- `then`: function called if promise is fulfilled
 	- `catch`: function called if promise is rejected
  	- `finally`: function always called after all processing is complete.
  ```javascript
    const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
	}); same code as above but adds rejected state 10 percent of time  
	coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

	// OUTPUT:
	//    Coin toss result: tails
	//    Toss completed  
	```
  







  	     
  	  	   
  	
  
  	     
  	       	
  	    	     
			
  	  
	    

	 
	 
