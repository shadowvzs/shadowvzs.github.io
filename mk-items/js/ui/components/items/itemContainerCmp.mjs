import { equipmentAreaCmp } from './equipmentAreaCmp.mjs';
import { itemCmp } from '../cards/itemCmp.mjs';

const itemListCmp = (app, items) => {
    const { store } = app;
    const itemCmpArray = items.map(item => itemCmp(app, item, { showFusionSelect: false }));

    return { 
        tagName: 'ul', 
        attributes: { 
            className: 'item-list',
            onDragOver: (ev) => ev.preventDefault(),
            onDrop: (ev) => {
                ev.preventDefault();
                const itemId = +ev.dataTransfer.getData('itemId');
                const idx = app.store.equippedItems.findIndex(item => item && item.id === itemId);
                if (idx >= 0) {
                    store.unEquipItem(idx);
                }
            } 
        }, 
        children: itemCmpArray
    };
}

export const itemContainerCmp = (app) => {
    const { store } = app;
    const items = store.filteredItems;

    return { 
        tagName: 'section', 
        attributes: { 
            className: 'item-container',
        }, 
        children: [
            equipmentAreaCmp(app),
            items.length > 0 && itemListCmp(app, items)
        ] 
    };
};
