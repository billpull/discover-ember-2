'use strict';

var ssaclAttributeRoles = require('ssacl-attribute-roles');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    about_me: DataTypes.TEXT,
    hash: {
      type: DataTypes.STRING,
      roles: {
        admin: true
      }
    }
  }, {
    classMethods: {
      associate: function (models) {
        models.user.hasMany(models.chirp, {
          foreignKey: {
            as: 'user_id',
            allowNull: false
          }
        });

        models.user.belongsToMany(models.user, {
          as: 'followees',
          through: models.follow,
          foreignKey: 'follower_id',
          otherKey: 'followee_id'
        });

        models.user.belongsToMany(models.user, {
          as: 'followers',
          through: models.follow,
          foreignKey: 'followee_id',
          otherKey: 'follower_id'
        });
      }
    },
    underscored: true,
    underscoredAll: true,
    createdAt: 'joined_at'
  });

  ssaclAttributeRoles(User);

  return User;
};
