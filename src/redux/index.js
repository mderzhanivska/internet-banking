import { devStore, prodStore } from './store';

export default (process.env.NODE_ENV === 'production' ? prodStore : devStore);
