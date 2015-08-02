import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  aboutMe: DS.attr('string'),
  joinedAt: DS.attr('date'),
  chirps: DS.hasMany('chirp', { async: true }),
  followees: DS.hasMany('user', {async: true, inverse: 'followers'}),
  followers: DS.hasMany('user', {async: true, inverse: 'followees'}),
  numberOfFollowing: Ember.computed('followees', function () {
    return this.get('followees').get('length');
  }),
  numberOfFollowers: Ember.computed('followers', function () {
    return this.get('followers').get('length');
  }),
  numberOfChirps: Ember.computed('chirps', function () {
    return this.get('chirps').get('length');
  })
});