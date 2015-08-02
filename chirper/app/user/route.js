import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		return Ember.RSVP.hash({
			user: this.store.query('user', {username: params.username}).then((users) => {
				return users.get('firstObject');
			})
		});
	}
});
