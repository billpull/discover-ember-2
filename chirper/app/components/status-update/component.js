import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		compose: function () {
			this.attrs.openComposeModel();
		}
	}
});
