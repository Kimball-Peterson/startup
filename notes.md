[read me](https://github.com/Kimball-Peterson/startup/blob/main/README.md) \\
*NOTES*
**Git Notes**
***- Git is useful. Use it.***

**EC2**  
		-	EC2 instance is remote access to running machine in different location (N. Virginia in my case)\
		-	EC2 instance can be accessed from my command line.\  
		-	Elastic IP allows me to stop the instance if I want to without having a new public IP assigned.\
		-	Server size t3.nano should be adequate (I am using t2)\\
 
**HTTP, HTTPS, TLS**\
	- HTTP - Hypertext Transport Protocol, non-secure connection, all data sent can be accessed by anyone in the chain of 	computers used to send info.\ 
 	- HTTPS - Secure Hypertext Transport Protocol - Establish a secure connection before any data is exchanged. All data 	encrypted using TLS Protocol.\  
  	- TLS Protocol:  
   		- Authentication:  lets each party to the communication verify that the other party is who they claim to be.\
     		- Encryption: Data is encrypted while being transmitted between the user agent and the server, in order to 		prevent it from being read and interpreted by unauthorized parties.\
       		- Integrity: TLS ensures that between encrypting, transmitting, and decrypting the data, no information is 		lost, damaged, tampered with, or falsified.\ 
	- Let's Encrypt and Certificates\
 		- Started by two Mozilla employees, nonprofit seeking to renew web certificates for free.\
   		- Use a service like Let’s Encrypt and IETF standard ACME protocol. Anyone who owns domain name can generate 		and renew certificates for free.\
     		- Modern browsers expect exclusively HTTPS.\
       		- By updating caddyfile to include the different versions of my domain name, https is possible. Secure 			connections only yuh.\
	 
**HTML**\
  		- The two major purposes of html are to provide structure and content to your web application.\
    		- Block element is meant to be a distinct block in the flow of the content structure.\
      		- Inline element is meant to be inline with the content flow of a block element.\
		- HTML media elements: img, audio, video, svg and canvas.\
  		- Svg and canvas both contain code to render a visual image (even animated)\
    		- Media tags that reverence external media all take URL as attribute.\
      			- Can be relative or full path.\\
	 
**CSS**\
		- Cascading Style Sheets\
  		- Objective is to style html based on user, developer and browser desires. In modern application styling 		focuses on helping developer create complex renderings of dynamic content that responds to user actions and 		device it is rendered on.\
    		- Defines rulesets or rules.\
      		- Rules comprised of:\
			- Selector\
   			- One or more declarations that represent the property to style with the given property value.\
      			- (selector) {}\
	 	- CSS -> HTML connection\
   			- Inline\
      				- <p style=“color: green”> CSS</p>\
	  		- Style Element\
     				- <style></style>\
	 		- Link to stylesheet\
    				- <link rel="stylesheet" href="styles.css/>\
			- Box Model\
   				- Everything is defined as boxes in CSS\
       				- When style is applied it is applies to a region of display that is a box\
	 
	 
