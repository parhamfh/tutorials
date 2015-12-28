Todos.Router.map(function() {
  this.resource('todos', { path: "/"}, function(){
    this.route('active');
  });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('todoparham');
  }
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});

Todos.TodosActiveRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todoparham', function(todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});
