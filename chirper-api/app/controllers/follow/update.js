module.exports = function(req, res, render) {

  req.models.follow.find({
    where: {
      id: req.params.follow_id 
    }
  })
  .then(function(follow) {
    
    /*
     * Set new values like this:
     * follow.some_field_name = req.body.follow.someFieldName;
     */
     
    return follow.save();
  })
  .then(function(follow) {
    render(follow);
  })
  .catch(function(err) {
    render(err);
  });

};