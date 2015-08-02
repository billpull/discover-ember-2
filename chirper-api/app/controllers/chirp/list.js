module.exports = function(req, res, render) {

  req.models.chirp
  .findAll()
  .then(function(chirps) {
    render(chirps);
  })
  .catch(function(err) {
    render(err);
  });

};