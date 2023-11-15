import { get, set } from 'https://cdn.jsdelivr.net/npm/idb-keyval@6/+esm';

const myWorker = new Worker("./worker.js",{type:'module'});

const user = { id: 1, name: 'pedro hurtado' }
async function setData() {
    await set('user', user)
}
setData();