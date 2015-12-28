window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'parham-todos-emberjs'
});

// Todos.ApplicationAdapter = DSFixtureAdapter.extend();
