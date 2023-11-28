import * as Comlink from 'comlink';

import type { HDF5Worker } from './h5.worker';
import H5Worker from './h5.worker.ts?worker&inline';

const instance = Comlink.wrap<{ HDF5Worker: typeof HDF5Worker }>(
  new H5Worker()
);

export async function getH5Worker() {
  return new instance.HDF5Worker();
}
