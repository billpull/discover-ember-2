module.exports = function(req, res, render) {

  req.models.chirp.find({
    where: {
      id: req.params.chirp_id 
    }
  })
  .then(function(chirp) {
    
    /*
     * Set new values like this:
     * chirp.some_field_name = req.body.chirp.someFieldName;
     */
     
    return chirp.save();
  })
  .then(function(chirp) {
    render(chirp);
  })
  .catch(function(err) {
    render(err);
  });

};