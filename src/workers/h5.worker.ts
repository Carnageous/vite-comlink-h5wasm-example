import * as Comlink from 'comlink';
import h5wasm, { Dataset } from 'h5wasm';

export class HDF5Worker {
  /** Example code, not needed for this repro */
  public async readExampleFile() {
    const { FS } = await h5wasm.ready;

    let response = await fetch(
      'https://ncnr.nist.gov/pub/ncnrdata/vsans/202003/24845/data/sans59510.nxs.ngv'
    );
    let ab = await response.arrayBuffer();

    FS.writeFile('sans59510.nxs.ngv', new Uint8Array(ab));

    // use mode "r" for reading.  All modes can be found in h5wasm.ACCESS_MODES
    const f = new h5wasm.File('sans59510.nxs.ngv', 'r');
    const res = f.get('entry/end_time') as Dataset;

    return res.value;
  }
}

Comlink.expose({ HDF5Worker });

export default null;
