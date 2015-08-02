import config from '../config/environment';
import Ember from 'ember';

export default Ember.Controller.extend({
	authenticator: 'simple-auth-authenticator:oauth2-password-grant',

	valuesChanged: Ember.observer('username', 'password', function () {
		this.set('errorMessage', false);
	}),
	
	actions: {
		signup: function () {
			var userData = {
				username: this.get('username'),
				password: this.get('password')
			};

			Ember.$.ajax({
				type: 'POST',
				url: config.apiURL + '/signup',
				dataType: 'json',
				data: userData
			}).done(() => {
				console.log("Created!");
				this.send('login');
			}).fail(() => {
				this.set('errorMessage', "Couldn't sign up!");
			});
		},
		login: function () {
			var username = this.get('username'),
				password = this.get('password');

			this.get('session').authenticate(this.authenticator, {
				identification: username,
				password: password
			}).then(() => {
				this.transitionToRoute('home');
			}, () => {
				this.set('errorMessage', 'Wrong username or password');
			});
		}
	}
});
