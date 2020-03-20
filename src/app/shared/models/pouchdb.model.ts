import PouchDB from 'pouchdb-browser';
import findPlugin from 'pouchdb-find';
PouchDB.plugin(findPlugin);
export default PouchDB;
