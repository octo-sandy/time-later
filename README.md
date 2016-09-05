# time-later

returns a bluebird promise delayed specified amount of time

## Install
```javascript
npm install time-later
```

## Usage
```javascript
"use strict";
const later = require("time-later");

later(1000).then(()=>console.log("after 1000 millisecond"))
```

## Related

- [delay](https://github.com/sindresorhus/delay) - Returns a promise delayed specified amount of time
- [immediate-promise](https://github.com/sindresorhus/immediate-promise) - Returns a promise resolved in the next event loop - think `setImmediate()`
