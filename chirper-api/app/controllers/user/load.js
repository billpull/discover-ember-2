module.exports = function(req, res, render) {

  req.models.user.find({
    where: {
      id: req.params.user_id 
    }
  })
  .then(function(user) {
    render({
      model: user
    });
  })
  .catch(function(err) {
    render(err);
  });

};