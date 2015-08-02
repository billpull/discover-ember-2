import config from '../../config/environment';
import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['following-container'],
	isFollowing: Ember.computed('profile.followers', 'session.currentUser', function () {
		return this.get('profile.followers').isAny('id', this.get('session.currentUser.id'));
	}),

	actions: {
		follow: function () {
			Ember.$.ajax({
				type: 'POST',
				url: config.apiURL + '/follow',
				dataType: 'json',
				data: {
					profileId: this.get('profile.id')
				}
			}).done(() => {
				this.get('profile.followers').pushObject(this.get('session.currentUser'));
			}).fail(() => {
				swal("Oops", "Couldn't follow user!", "error");
			});
		},
		unfollow: function () {
			Ember.$.ajax({
				type: 'POST',
				url: config.apiURL + '/unfollow',
				dataType: 'json',
				data: {
					profileId:this.get('profile.id')
				}
			}).done(() => {
				var myFollow = this.get('profile.followers').findBy('id', this.get('sesssion.currentUser.id'));
				this.get('profile.followers').removeObject(myFollow);
			}).fail(() => {
				swal("Oops", "Couldn't unfollow user!", "error");
			});
		}
	}
});
