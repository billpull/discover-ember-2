module.exports = function(req, res, render) {

  req.models.follow
  .create(req.body.follow)
  .then(function(follow) {
    render(follow);
  })
  .catch(function(err) {
    render(err);
  });

};