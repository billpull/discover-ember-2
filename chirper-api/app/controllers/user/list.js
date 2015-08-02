module.exports = function(req, res, render) {

  var findQuery;

  if (req.query.me && !req.user) {
  	return render ("You're not logged in");
  }

  if (req.query.me) {
      findQuery = {
        where: { id: req.user },
        include: [
          req.models.chirp,
          { model: req.models.user, as: 'followees' },
          { model: req.models.user, as: 'followers' }
        ]
      }
    }

  if (req.query.username) {
    findQuery = {
      where: { username: req.query.username },
      include: [
        req.models.chirp,
        { model: req.models.user, as: 'followees' },
        { model: req.models.user, as: 'followers' }
      ]
    }
  }

  if (req.query.followee) {
    findQuery = {
      include: [
        { model: req.models.user, as: 'followees', where: { username: req.query.followee } }
      ]
    }
  }

  if (req.query.follower) {
    findQuery = {
      include: [
        { model: req.models.user, as: 'followers', where: { username: req.query.follower } }
      ]
    }
  }

  req.models.user
  .findAll(findQuery)
  .then(function(users) {
    render(users);
  })
  .catch(function(err) {
    render(err);
  });

};