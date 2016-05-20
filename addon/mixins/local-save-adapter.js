import Ember from 'ember';

export default Ember.Mixin.create({
  updateRecord(store, type, snapshot) {
    if (snapshot.adapterOptions && snapshot.adapterOptions.localSave) {
      return null;
    } else {
      return this._super(store, type, snapshot);
    }
  }
});
