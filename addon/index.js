import AdapterMixin from 'ember-in-viewport/mixins/local-save-adapter';
import ModelMixin from 'ember-data-local-model/mixins/local-save-model';

export default {
  localModelMixin: ModelMixin,
  localModelAdapterMixin: AdapterMixin
};
