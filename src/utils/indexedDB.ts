export default class DB {
  private dbName: string; // 数据库名称

  constructor(dbName: string) {
    this.dbName = dbName;
  }

  // 打开数据库
  public openStore(storeName: string, keyPath: string, indexs?: string[]) {
    const request = window.indexedDB.open(this.dbName, 1);
    request.onsuccess = (event) => {
      console.log('数据库打开成功！');
      console.log('event', event);
    };

    request.onerror = (event) => {
      console.log('数据库打开失败！');
      console.log('event', event);
    };

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      console.log('数据库升级成功！');
      console.log('event', event);
      const { result }: any = event.target;
      const store = result.createObjectStore(storeName, {
        autoIncrement: true,
        keyPath
      });
      if (indexs && indexs?.length) {
        indexs.map((value: string) => {
          store.createIndex(value, value, { unique: true });
        });
      }
      store.transaction.oncomplete = (event) => {
        console.log('创建对象仓库成功！');
      };
    };
  }
}
