import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	chirpText: '',

	focusOnTextarea: Ember.on('didInsertElement', function () {
		Ember.run.scheduleOnce('afterRender', () => {
			this.$().find('textarea').focus();
		});
	}),

	remainingChars: Ember.computed('chirpText', function () {
		return 140 - this.get('chirpText').length;
	}),

	noCharsLeft: Ember.computed('remainingChars', function () {
		return (this.get('remainingChars') < 0);
	}),

	actions: {
		postChirp: function () {
			if (this.get('noCharsLeft')) {
				swal("Woops!", "You have too many characters in your chirp!", "error");
				return false;
			}
			var text = this.get('chirpText');

			var chirpData = {
				text: text,
				createdAt: new Date()
			};

			var newChirp = this.get('store').createRecord('chirp', chirpData);

			return newChirp.save().then(() => {
				this.attrs.dismiss();
			});
		}
	}
});
