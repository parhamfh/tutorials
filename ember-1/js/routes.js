Todos.Router.map(function() {
  this.resource('todos', { path: "/"}, function(){
    // add routes:  
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
