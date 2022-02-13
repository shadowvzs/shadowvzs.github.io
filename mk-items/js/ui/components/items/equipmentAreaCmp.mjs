import { itemCmp } from "../cards/itemCmp.mjs";

const equipmentSlot = [
    'Weapon Slot',
    'Armor Slot',
    'Accessory Slot',
    'Special Slot'
]

export const emptySlotCmp = (app, item, options = {}) => {
    const { store } = app;
    const { index } = options;

    const cmp = { 
        tagName: 'li', 
        attributes: { 
            className: 'item empty-slot',
            onDragOver: (ev) => ev.preventDefault(),
            onDrop: (ev) => {
                ev.preventDefault();
                const itemId = ev.dataTransfer.getData('itemId');
                store.equipItem(+itemId, index);
            },
        }, 
        children: [
            { 
                tagName: 'div', 
                attributes: { className: 'empty-slot' },
                children: [
                    {
                        tagName: 'span',
                        attributes: [],
                        children: [equipmentSlot[index]]
                    },
                    {
                        tagName: 'img', 
                        attributes: { 
                            src: `./img/slots/${index}.webp`,
                            alt: [equipmentSlot[index]]
                        }, 
                        children: []
                    },
                ].filter(Boolean)
            },            
        ] 
    };
    
    return cmp;
}

export const equipmentAreaCmp = (app) => {
    const { store } = app;
    const items = store.equippedItems;
    const itemsCmp = items.map((item, idx) => item ? itemCmp(app, item, { showFusionSelect: true }) : emptySlotCmp(app, item, { index: idx }));
    const eqInfo = store.getEquipmentInfo();

    return { 
        tagName: 'section', 
        attributes: { className: 'equipment-area' }, 
        children: [
            eqInfo.length > 0 && {
                tagName: 'ul',
                attributes: { className: 'equipment-info' },
                children: [
                    {
                        tagName: 'li',
                        children: ['Equipment Info']
                    },
                    ...eqInfo.map(row => ({ tagName: 'li', children: [row] })),
                ]
            },
            ...itemsCmp,
        ].filter(Boolean)
    };
}
