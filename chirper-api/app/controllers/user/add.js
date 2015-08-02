module.exports = function(req, res, render) {

  req.models.user
  .create(req.body.user)
  .then(function(user) {
    render(user);
  })
  .catch(function(err) {
    render(err);
  });

};