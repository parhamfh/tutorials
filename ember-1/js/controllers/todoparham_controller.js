Todos.TodoparhamController = Ember.ObjectController.extend({
  actions: {
    editTodo: function() {
      this.set('isEditing', true);
    },
    acceptChanges: function(){
      if(!this.get('isEditing'))
        return;
      this.set('isEditing', false);

      if(Ember.isEmpty(this.get('model.title'))){
        this.send('removeTodo');
      } else {
        this.get('model').save();
      }
    },
    removeTodo: function(){
      //console.log(this.get('model.id') + ': ' + 'removeTodo');
      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    }
  },
  isEditing: false,
  isCompleted: function(key, value) {
    var model = this.get('model');
    console.log('checking checke');
    if (value === undefined) {
      return model.get('isCompleted');
    } else {
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});

