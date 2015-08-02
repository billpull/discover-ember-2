import Ember from 'ember';

export default Ember.Controller.extend({
	userIsProfile: Ember.computed('model.user', 'session.currentUser', function () {
		return this.get('model.user.id') === this.get('session.currentUser.id');
	})
});
