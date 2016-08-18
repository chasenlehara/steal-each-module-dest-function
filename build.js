var stealTools = require("steal-tools");

stealTools.export({
	system: {
		config: __dirname + '/package.json!npm',
		main: 'steal-each-module-dest-function'
	},
	outputs: {
		"+standalone": {
			eachModule: [
				'src/first-module',
				'src/second-module'
			],
			dest: function(moduleName) {
				return __dirname + '/' + moduleName + '.js';
			},
			format: 'global'
		}
	}
}).catch(function(e){
	
	setTimeout(function(){
		throw e;
	},1);
	
});
