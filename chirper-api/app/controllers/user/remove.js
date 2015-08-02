module.exports = function(req, res, render) {

  req.models.user.find({
    where: {
      id: req.params.user_id 
    } 
  })
  .then(function(user) {
    return user.destroy();
  })
  .then(function() {
    res.json({});
  })
  .catch(function(err) {
    render(err);
  });

};