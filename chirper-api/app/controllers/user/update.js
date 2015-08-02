module.exports = function(req, res, render) {

  req.models.user.find({
    where: {
      id: req.params.user_id 
    }
  })
  .then(function(user) {
    
    /*
     * Set new values like this:
     * user.some_field_name = req.body.user.someFieldName;
     */
     
    return user.save();
  })
  .then(function(user) {
    render(user);
  })
  .catch(function(err) {
    render(err);
  });

};