'use strict';

var ssaclAttributeRoles = require('ssacl-attribute-roles');

module.exports = function(sequelize, DataTypes) {
  var Chirp = sequelize.define('chirps', {
    text: DataTypes.TEXT(140)
  }, {
    classMethods: {
      associate: function(models) {
        models.chirp.belongsTo(models.user, {
          onDelete: 'cascade'
        })
      }
    },

    underscored: true,
    underscoredAll: true
  });

  ssaclAttributeRoles(Chirp);

  return Chirp;
};
