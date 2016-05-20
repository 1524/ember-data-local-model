import Ember from 'ember';
import LocalSaveAdapterMixin from 'ember-data-local-model/mixins/local-save-adapter';
import { module, test } from 'qunit';

module('Unit | Mixin | local save adapter');

// Replace this with your real tests.
test('it works', function(assert) {
  let LocalSaveAdapterObject = Ember.Object.extend(LocalSaveAdapterMixin);
  let subject = LocalSaveAdapterObject.create();
  assert.ok(subject);
});
