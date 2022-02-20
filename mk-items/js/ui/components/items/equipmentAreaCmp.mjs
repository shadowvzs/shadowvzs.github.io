import { itemCmp } from "../cards/itemCmp.mjs";

const equipmentSlot = [
    'Weapon Slot',
    'Armor Slot',
    'Accessory Slot',
    'Special Slot'
]

export const emptySlotCmp = ({ store, item, options = {} }) => {
    const { index } = options;

    const cmp = {
        tagName: 'li',
        attributes: {
            className: 'item empty-slot',
            onDragOver: (ev) => ev.preventDefault(),
            onDrop: (ev) => {
                ev.preventDefault();
                const itemId = ev.dataTransfer.getData('itemId');
                store.inventory.equip(+itemId, index);
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

export const equipmentAreaCmp = (store) => {
    const items = store.inventory.slots;
    const itemsCmp = items.map((item, idx) => (
        item
            ? itemCmp({ store, item, options: { showFusionSelect: true } })
            : emptySlotCmp({ store, item, options: { index: idx } })
    ));
    const eqInfo = store.inventory.getInfo();

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
