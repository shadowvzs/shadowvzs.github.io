export class JsonStorage {
  constructor(storage, key) {
    this.storage = storage;
    this.key = key;
  }

  load(fallback = null) {
    try {
      const value = this.storage.getItem(this.key);
      return value === null ? fallback : JSON.parse(value);
    } catch (error) {
      console.warn(`Could not load persisted state for "${this.key}".`, error);
      return fallback;
    }
  }

  save(value) {
    try {
      this.storage.setItem(this.key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Could not persist state for "${this.key}".`, error);
    }
  }
}

export default JsonStorage;
