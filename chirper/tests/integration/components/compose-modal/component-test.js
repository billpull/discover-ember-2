import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('compose-modal', 'Integration | Component | compose modal', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);
  this.render(hbs`{{#compose-modal}}`);

  assert.equal(this.$().find('button.chirp').length, '1');
  assert.equal(this.$().find('textarea').length, '1');
});
