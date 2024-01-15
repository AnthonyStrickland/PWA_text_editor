import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) => { console.error('putDb not implemented');
// DataBase
const jateDb = await openDB('jate', 1);
// New Transaction
const tx = jateDb.transaction('jate', 'readwrite');
// Open Store
const objStore = tx.objectStore('jate');
// Get all from store
const req = objStore.put({ id: id, value: value })
// Confirmation
const res = await req;
console.log('saved to the DB', res);
};


export const getDb = async () => { console.error('getDb not implemented');
// DataBase
const jateDb = await openDB ('jate', 1);
// New Transaction
  const tx = jateDb.transaction('jate', 'readonly');
// Open Store
  const objStore = tx.objectStore('jate');
// Get all from store
  const req = objStore.getAll()
// Confirmation
  const res = await req;
  console.log('saved to the DB', res);
};

initdb();
