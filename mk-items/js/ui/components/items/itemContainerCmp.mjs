import { equipmentAreaCmp } from './equipmentAreaCmp.mjs';
import { itemCmp } from '../cards/itemCmp.mjs';

const itemListCmp = ({ store, items }) => {
    const itemCmpArray = items.map(item => itemCmp({ store, item, options: { showFusionSelect: false } }));
    return {
        tagName: 'ul',
        attributes: {
            className: 'item-list',
            onDragOver: (ev) => ev.preventDefault(),
            onDrop: (ev) => {
                ev.preventDefault();
                const itemId = +ev.dataTransfer.getData('itemId');
                const idx = store.inventory.getIndex(itemId);
                if (idx >= 0) { store.inventory.unEquip(idx); }
            }
        },
        children: itemCmpArray
    };
}

export const itemContainerCmp = (store) => {
    const items = store.deck.filter.filteredItems;

    return {
        tagName: 'section',
        attributes: {
            className: 'item-container',
        },
        children: [
            equipmentAreaCmp(store),
            items.length > 0 && itemListCmp({ store, items })
        ]
    };
};
