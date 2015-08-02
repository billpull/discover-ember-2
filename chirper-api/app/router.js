var controllers = require('./controllers/.index');
var actions = require('./actions/.index');

module.exports = function(app) {
  
  // User
  app.route('/users')
    .get(controllers.user.list)
    .post(controllers.user.add);
  app.route('/users/:user_id')
    .get(controllers.user.load)
    .put(controllers.user.update)
    .delete(controllers.user.remove);

  // User
  app.route('/users')
    .get(controllers.user.list)
    .post(controllers.user.add);
  app.route('/users/:user_id')
    .get(controllers.user.load)
    .put(controllers.user.update)
    .delete(controllers.user.remove);

  // Chirp
  app.route('/chirps')
    .get(controllers.chirp.list)
    .post(controllers.chirp.add);
  app.route('/chirps/:chirp_id')
    .get(controllers.chirp.load)
    .put(controllers.chirp.update)
    .delete(controllers.chirp.remove);

  // Follow
  app.route('/follows')
    .get(controllers.follow.list)
    .post(controllers.follow.add);
  app.route('/follows/:follow_id')
    .get(controllers.follow.load)
    .put(controllers.follow.update)
    .delete(controllers.follow.remove);

  // Signup
  app.post('/signup', actions.signup);

  // Login
  app.post('/token', actions.login);

  // Follow
  app.post('/follow', actions.follow);

  // Unfollow
  app.post('/unfollow', actions.unfollow);

};