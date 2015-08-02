module.exports = function(req, res, render) {

  req.models.chirp.find({
    where: {
      id: req.params.chirp_id 
    } 
  })
  .then(function(chirp) {
    return chirp.destroy();
  })
  .then(function() {
    res.json({});
  })
  .catch(function(err) {
    render(err);
  });

};