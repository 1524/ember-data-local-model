import ApplicationAdapter from './application';
import { localModelAdapterMixin } from 'ember-data-local-model';

export default ApplicationAdapter.extend(localModelAdapterMixin);
