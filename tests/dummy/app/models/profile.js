import DS from 'ember-data';
import { localModelMixin } from 'ember-data-local-model';

export default DS.Model.extend(localModelMixin, {
  name: DS.attr('string')
});
