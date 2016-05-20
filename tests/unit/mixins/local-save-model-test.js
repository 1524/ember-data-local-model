import Ember from 'ember';
import LocalSaveModelMixin from 'ember-data-local-model/mixins/local-save-model';
import { module, test } from 'qunit';

module('Unit | Mixin | local save model');

// Replace this with your real tests.
test('it works', function(assert) {
  let LocalSaveModelObject = Ember.Object.extend(LocalSaveModelMixin);
  let subject = LocalSaveModelObject.create();
  assert.ok(subject);
});
