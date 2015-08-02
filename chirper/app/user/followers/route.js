import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params, transition) {
		var username = transition.params.user.username;

		return Ember.RSVP.hash({
			users: this.store.query('user', {'followee': username})
		});
	}
});
