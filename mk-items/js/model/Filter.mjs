import { history } from '../logic/historyManager.mjs';
import global from '../data/global.mjs';
import { makeObservable, reRender } from '../util/observable.mjs';

export class Filter {

    constructor(deck, tagGroups) {
        this.deck = deck;
        this.tagGroups = tagGroups;
        this._filterTags = [];
        this._history = history;
        this.filteredItems = deck.items;

        const { filter = [] } = this._history.getUrlParams(['filter'], '-');

        if (filter.length) {
            const tagIds = filter.map(x => Number(x));
            const tags = tagIds.map(x => global.itemTags.valueMap[x]).filter(Boolean);
            this._filterTags = tagIds;
            tags.forEach(tag => {
                const tagGroup = this.tagGroups.valueMap[tag.group];
                if (!tagGroup || tagGroup.render !== 'select') { return; }
                tagGroup.currentTagId = tag.id;
            });
        }
    }

    hasFilterTag(tagId) {
        return this._filterTags.includes(tagId);
    }

    toggleTagFilter(tagId) {
        if (this.hasFilterTag(tagId)) {
            this._filterTags = this._filterTags.filter(x => x !== tagId);
        } else {
            this._filterTags.push(tagId);
        }
        this.itemUpdate();
    }

    getTagGroupValue(tagGroupId) {
        const tagGroup = this.tagGroups.valueMap[tagGroupId];
        if (!tagGroup) { return ''; }
        return tagGroup.currentTagId || '';
    }

    setTagGroupValue(tagGroupId, tagId) {
        const tagGroup = this.tagGroups.valueMap[tagGroupId];
        if (!tagGroup) { return; }
        const tagGroupItems = tagGroup.items.map(tag => tag.id);

        const tagFilter = this._filterTags.filter(tag => !tagGroupItems.includes(tag));
        tagGroup.currentTagId = tagId;
        if (tagId) {
            tagFilter.push(tagId);
        }
        this._filterTags = tagFilter;
        this.itemUpdate();
    }

    itemUpdate() {
        this._history.updateQueryParams({
            filter: this._filterTags.join('-'),
            // equip: this.inventory.getSlotData
        });
        const newList = this.deck.items.filter(item => item.hasTags(this._filterTags) && !this.deck.blackListedIds.has(item.id));
        this.filteredItems = [...newList];

    }

}

const WrappedFilter = makeObservable(Filter, {
    filteredItems: reRender
});

export default WrappedFilter;
