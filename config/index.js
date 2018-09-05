var configValues = require('./config');

module.exports = {
	getDbConnectionString: function(){
		return 'mongodb://' + configValues.uname + ":" + configValues.pwd + '@ds127342.mlab.com:27342/nodeapptodo';
	}
}
