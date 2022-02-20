import { history } from '../logic/historyManager.mjs';
import Filter from './Filter.mjs';

class Deck {
    constructor(tagGroups) {
        this.items = [];
        this.blackListedIds = new Set();
        this._itemMap = {};
        this.filter = new Filter(this, tagGroups);
        this._history = history;
        window['deck'] = this;
    }

    add(items) {
        if (!Array.isArray(items)) { items = [items]; }
        this.items = [...this.items, ...items];
        items.forEach(item => this._itemMap[item.id] = item);
        this.filter.itemUpdate();
        return this;
    }

    remove(itemIds) {
        if (!Array.isArray(itemIds)) { itemIds = [itemIds]; }
        this.items = this.items.filter(item => !itemIds.includes(item.id));
        itemIds.forEach(itemId => delete this._itemMap[itemId]);
        this.filter.itemUpdate();
        return this;
    }

    getItem(id) {
        return this._itemMap[id];
    }

    take(id) {
        this.blackListedIds.add(id);
        this.filter.itemUpdate();
        return this._itemMap[id];
    }

    putBack(id) {
        this.blackListedIds.delete(id);
        this.filter.itemUpdate();
        return this._itemMap[id];
    }

}

export default Deck;