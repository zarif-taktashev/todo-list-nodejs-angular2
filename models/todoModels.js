var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoScheme = new Schema({
	username: String,
	todo: String,
	isDone: Boolean,
	hasAttachment: Boolean
});

var Todos = mongoose.model('Todos', todoScheme);

module.exports = Todos;