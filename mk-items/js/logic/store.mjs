import { styleChanger } from './theme.mjs';
import { HistoryManager } from './historyManager.mjs';
import { items } from '../data/item_db.mjs';
import { itemAttributes } from '../data/item_attributes.mjs';
import { itemTags, tagGroups } from '../data/item_tags.mjs';
import { Item } from '../model/Item.mjs';

export class Store {
   
    constructor(app) {
        this.app = app;
        this.history = new HistoryManager();
        this.theme = localStorage.getItem('theme') || 'light';
        this.setTheme = (theme) => { 
            this.theme = theme;
            styleChanger(theme);
            localStorage.setItem('theme', theme);
        };
        this.setTheme(this.theme);

        this.items = items.map(x => new Item(x));
        this.itemAttributes = itemAttributes;
        this.tags = [...new Set(this.items.map(x => x._tagsId).flat(3))];
        this.tagGroups = tagGroups;
        this.tagsMap = itemTags.valueMap;
        this.tagFilter = new Set();
        
        this.maxEquipmentSlot = 4;
        this.equippedItems = new Array(this.maxEquipmentSlot).fill(null);

        this.viewMode = localStorage.getItem('viewMode') || 'overlay';
        const { equip = [], filter = [] } = this.history.getUrlParams(['filter', 'equip'],'-');
        
        if (equip.length) {
            equip.forEach((e, idx) => {
                if (!e) { return; }
                const [itemId, itemFusion] = e.split('f').map(x => Number(x));
                const item = this.items.find(x => x.id === itemId);
                if (item && item.fusion !== itemFusion) { item.setFusion(itemFusion); }
                this.equippedItems[idx] = item;
            });
        }

        if (filter.length) {
            filter.forEach(x => {
                const tagId = Number(x);
                const tag = itemTags.find(x => x.id === tagId);
                if (!tag) {return; }
                this.tagFilter.add(tagId);
                const tagGroup = this.tagGroups.valueMap[tag.group];
                if (tagGroup && tagGroup.render === 'select') {
                    tagGroup.currentTagId = tagId;
                }
            });
        }

        const tagFilter = [...this.tagFilter.values()];
        const equippedItemIds = this.equippedItems.map(x => x && x.id).filter(Boolean);
        this.filteredItems = this.items.filter(item => item.hasTags(tagFilter) && !equippedItemIds.includes(item.id));
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
        return this.equippedItems.filter(Boolean).map(x => x.getInfo().slice(1)).flat(2);
    }

    setViewMode(viewMode) {
        this.viewMode = viewMode;
        localStorage.setItem('viewMode', viewMode);
        this.app.refresh();
    }

    filterItems = () => {
        const tagFilter = [...this.tagFilter.values()];
        const equippedItemIds = this.equippedItems.map(x => x && x.id).filter(Boolean);
        this.filteredItems = this.items.filter(item => item.hasTags(tagFilter) && !equippedItemIds.includes(item.id));
        this.history.updateQueryParams({ 
            filter: tagFilter.join('-'),
            equip: this.equippedItems.map(x => x ? (x.id + 'f' + x.fusion) : '').join('-')
        })
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

    getTagGroupValue = (tagGroupId) => {
        const tagGroup = this.tagGroups.valueMap[tagGroupId];
        if (!tagGroup) { return ''; }
        return tagGroup.currentTagId || '';
    }

    setTagGroupValue = (tagGroupId, tagId) => {
        const tagGroup = this.tagGroups.valueMap[tagGroupId];
        if (!tagGroup) { return; }
        const tagGroupItems = tagGroup.items.map(tag => tag.id);
        const tagFilter = [...this.tagFilter.values()].filter(tag => !tagGroupItems.includes(tag));
        tagGroup.currentTagId = tagId;
        if (tagId) {
            tagFilter.push(tagId);
        }
        this.tagFilter = new Set(tagFilter);
        this.filterItems();
    }
}