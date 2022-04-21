# Cross-Domain Embedding: Making Third-Party Cookies Work Again

Even though it can be a bit of work, it’s still possible to have third-party cookies work in an embedded cross-domain website that’s inside of an iframe. Even with Safari’s new restrictions, it can still be accomplished through their new experimental API.

This repository serves as the code for the [full article on Code Project which is available here](https://www.codeproject.com/Articles/5330276/Cross-Domain-Embedding-Making-Third-Party-Cookies).

It contains a fully working example written in node.js / HTML / JavaScript that has working third-party cookies from an embedded cross-domain website on all browsers.

### Making this work

To make this project work, install [node.js](https://nodejs.org/en/), get this repository from github and in the working directoroy run `npm install` followed by `node app.js`

Without HTTPS, you'll get a result like this:

![no https](https://www.codeproject.com/KB/Articles/5330276/image1.png)

And the cookie will be blocked:

![blocked cookie](https://www.codeproject.com/KB/Articles/5330276/image2.png)

To get around this HTTPS is introduced. If you see this screen:

![invalid certificate](https://www.codeproject.com/KB/Articles/5330276/image4.png)

Then you'll need to type `thisisunsafe` on both domains at the top level to allow it to finally work:

![working](https://www.codeproject.com/KB/Articles/5330276/image5.png)

### Safari

Safari will reject the cookie even with the changes, so in order to make that work `hasStorageAccess` and `requestStorageAccess` must be used within their experimental API.

Implementing this allows the user to click on a button to finally get a prompt in Safari to allow cookies to once again work:

![working in safari](https://www.codeproject.com/KB/Articles/5330276/image10.png)

### Conclusion

For more thorough information refer to the [Code Project article](https://www.codeproject.com/Articles/5330276/Cross-Domain-Embedding-Making-Third-Party-Cookies) that was mentioned above.
