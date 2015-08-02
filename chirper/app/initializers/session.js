import Ember from "ember";  
import Session from "simple-auth/session";

export function initialize(container) {
  Session.reopen({
    
    setCurrentUser: function() {
      // Get the token from localStorage
      var accessToken = this.get('secure.access_token');
    
      // If the token exists, fetch the user from the backend
      if (!Ember.isEmpty(accessToken)) {
        container.lookup('service:store').query('user', { me: true }).then((array) => {
          var user = array.get('firstObject');
          // Store the user
          this.set('content.currentUser', user);
        }, (err) => {
          console.log(err);
        });
      }
    }.observes('secure.access_token')

  });
}

export default {
  name: 'session',
  initialize: initialize,
  before: 'simple-auth'
};