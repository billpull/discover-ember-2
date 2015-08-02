module.exports = function(req, res, render) {

  req.models.follow.find({
    where: {
      id: req.params.follow_id 
    } 
  })
  .then(function(follow) {
    return follow.destroy();
  })
  .then(function() {
    res.json({});
  })
  .catch(function(err) {
    render(err);
  });

};