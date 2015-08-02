module.exports = function(req, res, render) {

  req.models.chirp.find({
    where: {
      id: req.params.chirp_id 
    }
  })
  .then(function(chirp) {
    render({
      model: chirp
    });
  })
  .catch(function(err) {
    render(err);
  });

};