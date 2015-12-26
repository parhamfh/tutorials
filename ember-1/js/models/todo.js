Todos.Todoparham = DS.Model.extend({
  title: DS.attr('str'),
  isCompleted: DS.attr('boolean')
});

Todos.Todoparham.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: true
 },
 {
   id: 2,
   title: '...Paaaa',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Profit!',
   isCompleted: false
 }
];
