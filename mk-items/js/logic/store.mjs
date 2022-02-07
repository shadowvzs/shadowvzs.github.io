import { items } from '../data/item_db.mjs';
import { itemAttributes } from '../data/item_attributes.mjs';
import { itemTags } from '../data/item_tags.mjs';
import { Item } from '../model/Item.mjs';

export class Store {
   
    constructor(app) {
        this.app = app;
        this.items = items.map(x => new Item(x));
        this.filteredItems = this.items;

        this.itemAttributes = itemAttributes;
        this.tags = [...new Set(this.items.map(x => x._tagsId).flat(3))];
        this.tagsMap = itemTags.valueMap;
        this.tagFilter = new Set();
        
        this.maxEquipmentSlot = 4;
        this.equippedItems = new Array(this.maxEquipmentSlot).fill(null);

        this.viewMode = 'overlay';
    }

    equipItem(itemId, index) {
        const item = this.items.find(item => item.id === itemId);
        if (
            (index === 0 && item.tags.includes('weapon')) ||
            (index === 1 && item.tags.includes('armor')) ||
            (index === 2 && item.tags.includes('accessory')) ||
            (index === 3)
        ) {
            this.equippedItems[index] = item;
            this.filterItems();
            this.app.refresh();
        }
    }

    unEquipItem(index) {
        this.equippedItems[index] = null;
        this.filterItems();
        this.app.refresh();
    }

    getEquipmentInfo() {
        // return this.equippedItems.filter(Boolean).map(x => x.getInfo().slice(1, -1)).flat(2); with labels
        return this.equippedItems.filter(Boolean).map(x => x.getInfo().slice(1)).flat(2);
    }

    setViewMode(viewMode) {
        this.viewMode = viewMode;
        this.app.refresh();
    }

    filterItems = () => {
        const tagFilter = [...this.tagFilter.values()];
        const equippedItemIds = this.equippedItems.map(x => x && x.id).filter(Boolean);
        this.filteredItems = this.items.filter(item => item.hasTags(tagFilter) && !equippedItemIds.includes(item.id));
        this.app.refresh();
    }
   
    toggleTagFilter = (tag) => {
        if (this.tagFilter.has(tag)) {
            this.tagFilter.delete(tag);
        } else {
            this.tagFilter.add(tag);
        }
        this.filterItems();
    }
}