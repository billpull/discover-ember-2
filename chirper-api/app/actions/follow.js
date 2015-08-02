module.exports = function(req, res, render) {

  if (!req.user) {
    return render([412, "You need to be logged in to follow!"]);
  }

  if (!req.body.profileId) {
    return render([412, "You need to specify who you want to unfollow!"]);
  }

  req.models.follow.create({
    follower_id: req.user,
    followee_id: req.body.profileId
  })
  .then(function(follow) {
    res.json({});
  })
  .catch(function(err) {
    render(err);
  });

};