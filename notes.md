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
push	Add an item to the end of the array	a.push(4)  
pop	Remove an item from the end of the array	x = a.pop()
slice	Return a sub-array	a.slice(1,-1)
sort	Run a function to sort an array in place	a.sort((a,b) => b-a)
values	Creates an iterator for use with a for of loop	for (i of a.values()) {...}
find	Find the first item satisfied by a test function	a.find(i => i < 2)
forEach	Run a function on each array item	a.forEach(console.log)
reduce	Run a function to reduce each array item to a single item	a.reduce((a, c) => a + c)
map	Run a function to map an array to a new array	a.map(i => i+i)
filter	Run a function to remove items	a.filter(i => i%2)
every	Run a function to test if all items match	a.every(i => i < 3)
some	Run a function to test if any items match	a.some(i => 1 < 1)

    

	 
	 
