import { styleChanger } from './theme.mjs';
import { history } from './historyManager.mjs';
import { items } from '../data/item_db.mjs';
import { tagGroups } from '../data/item_tags.mjs';
import { Inventory } from '../model/Inventory.mjs';
import { makeObservable, reRender } from '../util/observable.mjs';
import Deck from '../model/Deck.mjs';
import Item from '../model/Item.mjs';

class Store {

    constructor() {
        this.history = history;
        this.tagGroups = tagGroups;

        const { equip = [] } = this.history.getUrlParams(['equip'], '-');

        // theme related things
        this.theme = localStorage.getItem('theme') || 'light';
        this.setTheme = (theme) => {
            this.theme = theme;
            styleChanger(theme);
            localStorage.setItem('theme', theme);
        };
        this.setTheme(this.theme);

        // item related things
        const mappedItems = items.map(x => new Item(x));
        this.deck = new Deck(this.tagGroups).add(mappedItems);

        this.tags = [...new Set(mappedItems.map(x => x._tagsId).flat(3))];
        this.inventory = new Inventory(this.deck, 4);

        if (equip.length) {
            equip.forEach((e, idx) => {
                if (!e) { return; }
                const [itemId, itemFusion] = e.split('f').map(x => Number(x));
                this.inventory.equip(itemId, idx, itemFusion);
            });
        }

        // UI related props
        this.viewMode = localStorage.getItem('viewMode') || 'overlay';
        this.setViewMode(this.viewMode);
        this.asideCollapseState = document.body.clientWidth < 578;

    }

    setViewMode(viewMode) {
        this.viewMode = viewMode;
        localStorage.setItem('viewMode', viewMode);
    }

    toggleAsideCollapsible() {
        this.asideCollapseState = !this.asideCollapseState;
    }

    // getTagGroupValue = (tagGroupId) => {
    //     const tagGroup = this.tagGroups.valueMap[tagGroupId];
    //     if (!tagGroup) { return ''; }
    //     return tagGroup.currentTagId || '';
    // }

    // setTagGroupValue = (tagGroupId, tagId) => {
    //     const tagGroup = this.tagGroups.valueMap[tagGroupId];
    //     if (!tagGroup) { return; }
    //     const tagGroupItems = tagGroup.items.map(tag => tag.id);

    //     const tagFilter = this.deck.getFilterTags().filter(tag => !tagGroupItems.includes(tag));
    //     tagGroup.currentTagId = tagId;
    //     if (tagId) {
    //         tagFilter.push(tagId);
    //     }
    //     this.deck.setFilterTags(tagFilter);
    // }
}

const WrappedStore = makeObservable(Store, {
    viewMode: reRender,
    asideCollapseState: reRender
});

const storeInstance = new WrappedStore();

export default storeInstance;