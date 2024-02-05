[read me](https://github.com/Kimball-Peterson/startup/blob/main/README.md) \\
*NOTES*\
**Git Notes**\
***- Git is useful. Use it.***\

**EC2**\
*** -	EC2 instance is remote access to running machine in different location (N. Virginia in my case)\
	-	EC2 instance can be accessed from my command line.\
	-	Elastic IP allows me to stop the instance if I want to without having a new public IP assigned.\
	-	Server size t3.nano should be adequate (I am using t2)\
**HTTP, HTTPS, TLS**
	- HTTP - Hypertext Transport Protocol, non-secure connection, all data sent can be accessed by anyone in the chain of 	computers used to send info.\ 
 	- HTTPS - Secure Hypertext Transport Protocol - Establish a secure connection before any data is exchanged. All data 	encrypted using TLS Protocol.\
  	- TLS Protocol:
   		- Authentication:  lets each party to the communication verify that the other party is who they claim to be.\
     		- Encryption: Data is encrypted while being transmitted between the user agent and the server, in order to 		prevent it from being read and interpreted by unauthorized parties.\
       		- Integrity: TLS ensures that between encrypting, transmitting, and decrypting the data, no information is 		lost, damaged, tampered with, or falsified.\ 
	- Let's Encrypt and Certificates
 		- Started by two Mozilla employees, nonprofit seeking to renew web certificates for free.\
   		- Use a service like Let’s Encrypt and IETF standard ACME protocol. Anyone who owns domain name can generate 		and renew certificates for free.\
     		- Modern browsers expect exclusively HTTPS.\
       		- By updating caddyfile to include the different versions of my domain name, https is possible. Secure 			connections only yuh.\
	 - HTML
  		- The two major purposes of html are to provide structure and content to your web application
