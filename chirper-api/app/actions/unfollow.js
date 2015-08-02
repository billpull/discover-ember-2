module.exports = function(req, res, render) {

  if (!req.user) {
    return render([412, "You need to be logged in to unfollow!"]);
  }

  if (!req.body.profileId) {
    return render([412, "You need to specify who you want to unfollow!"]);
  }

  req.models.follow.find({
    where: {
      follower_id: req.user,
      followee_id: req.body.profileId
    }
  })
  .then(function(follow) {
    return follow.destroy();
  })
  .then(function(resp) {
    res.status(204).json({});
  })
  .catch(function(err) {
    render(err);
  });

};