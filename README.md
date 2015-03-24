# xhr-response

The `xhr-response` is a small helper library for safely extracting response data
from XHR requests. There are some minor bugs in browsers which can cause
exceptions to be thrown when accessing the wrong properties of an XHR request
instance. This module works around these bugs. 

## Installation

This module is primary written for client-side code which use the commonjs
module pattern for exporting.

```
npm install --save xhr-response
```

## Usage

It's just as simple as:

```js
var response = require("xhr-response");

var xhr = new XMLHTTPRequest();
// .. stuffs ..

xhr.onload = function () {
  var data = response(xhr);

  console.log('data', data);
};
```

## License

MIT
