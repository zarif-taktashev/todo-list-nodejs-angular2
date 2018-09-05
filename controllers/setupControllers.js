var Todos = require('../models/todoModels');

module.exports = function(app){
	app.get('/api/setupTodos', function(req, res){
		var startTodos = [
			{
				username: 'zarif',
				todo: 'Buy milk', 
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'zarif',
				todo: 'Feed dog', 
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'zarif',
				todo: 'Learn node', 
				isDone: false,
				hasAttachment: false
			},
		];
		Todos.create(startTodos, function(err, result){
			res.send(result);
		})
	})
}
