# steal-each-module-dest-function

[![Build Status](https://travis-ci.org/chasenlehara/steal-each-module-dest-function.png?branch=master)](https://travis-ci.org/chasenlehara/steal-each-module-dest-function)



## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'steal-each-module-dest-function';
```

### CommonJS use

Use `require` to load `steal-each-module-dest-function` and everything else
needed to create a template that uses `steal-each-module-dest-function`:

```js
var plugin = require("steal-each-module-dest-function");
```

## AMD use

Configure the `can` and `jquery` paths and the `steal-each-module-dest-function` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'steal-each-module-dest-function',
		    	location: 'node_modules/steal-each-module-dest-function/dist/amd',
		    	main: 'lib/steal-each-module-dest-function'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/steal-each-module-dest-function/dist/global/steal-each-module-dest-function.js'></script>
```

## Contributing

### Making a Build

To make a build of the distributables into `dist/` in the cloned repository run

```
npm install
node build
```