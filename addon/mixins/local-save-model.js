import Ember from 'ember';

export default Ember.Mixin.create({
  localSave() {
    return this.save({adapterOptions: {localSave: true}});
  }
});
