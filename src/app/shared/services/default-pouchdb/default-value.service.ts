import PouchDB from '@pouchdb';

export class DefaultValueService {
  async createAndFill<T>(
    databaseName: string,
    defaultValue: T[],
    indexedFields?: string[]
  ): Promise<PouchDB.Database<T>> {
    const database = new PouchDB<T>(databaseName, { auto_compaction: true });
    if (indexedFields) {
      database.createIndex({
        index: { fields: indexedFields }
      });
    }
    const docs = await database.allDocs();
    if (!docs.total_rows) {
      await database.bulkDocs(defaultValue);
    }
    return database;
  }
}
