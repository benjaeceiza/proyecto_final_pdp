import { Store } from "../store/Store.js";

export class Database {
  public tareas: Store;

  constructor() {
    this.tareas = new Store();
  }

}


