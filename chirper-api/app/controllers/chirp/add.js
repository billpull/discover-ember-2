module.exports = function(req, res, render) {

  if (!req.body.chirp) {
  	return render("You need to specify a chirp object");
  }

  if (!req.user) {
  	return render("you need to be logged in to post");
  }

  req.body.chirp.user_id = req.user;

  req.models.chirp
  .create(req.body.chirp)
  .then(function(chirp) {
    render(chirp);
  })
  .catch(function(err) {
    render(err);
  });

};