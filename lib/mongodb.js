var mongoose = require('mongoose');
var mongoConfig = require(util.configDir + '/mongodbConfig.json').dataServer;
mongoose.connect('mongodb://' + mongoConfig.user + ':' + mongoConfig.pwd + '@' + mongoConfig.host + ':' + mongoConfig.port + '/' + mongoConfig.db);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = mongoose;