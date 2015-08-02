module.exports = function(req, res, render) {

  req.models.follow
  .findAll()
  .then(function(follows) {
    render(follows);
  })
  .catch(function(err) {
    render(err);
  });

};