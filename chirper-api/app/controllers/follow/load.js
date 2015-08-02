module.exports = function(req, res, render) {

  req.models.follow.find({
    where: {
      id: req.params.follow_id 
    }
  })
  .then(function(follow) {
    render({
      model: follow
    });
  })
  .catch(function(err) {
    render(err);
  });

};