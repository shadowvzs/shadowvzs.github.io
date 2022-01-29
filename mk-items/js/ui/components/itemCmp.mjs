import { fusionSelectCmp } from './fusionSelectCmp.mjs';

const overlay = (item) => {
    return {
        tagName: 'div', 
        attributes: { 
            className: 'overlay',
        }, 
        children: [
            {
                tagName: 'ul', 
                children: item.getInfo().map(x => ({
                    tagName: 'li', 
                    children: [x]
                }))
            }
        ]
    };
}

export const itemCmp = (app, item, options = {}) => {
    const { store } = app;
    const index = store.equippedItems.findIndex(x => x && x.id === item.id);
    const isEquiped = index >= 0;

    const cmp = { 
        tagName: 'li', 
        attributes: { 
            className: 'item',
            draggable: true,
            onDragStart: (ev) => ev.dataTransfer.setData("itemId", item.id)
        }, 
        children: [
            { 
                tagName: 'div', 
                children: [
                    {
                        tagName: 'img', 
                        attributes: { 
                            src: item.imageUrl,
                            alt: item.name
                        }, 
                        children: []
                    },
                    store.viewMode === 'overlay' && overlay(item),
                    options.showFusionSelect && fusionSelectCmp(app, item),
                    store.viewMode !== 'overlay' && !isEquiped && {
                        tagName: 'div',
                        attributes: {
                            className: 'info-btn',
                            onClick: () => alert(item.getInfo().join('\r\n'))
                        },
                        children: ['info']
                    },
                    isEquiped && {
                        tagName: 'div',
                        attributes: {
                            className: 'info-btn',
                            onClick: () => store.unEquipItem(index)
                        },
                        children: ['unequip']
                    }
                ].filter(Boolean)
            }
        ] 
    };
    
    return cmp;
}