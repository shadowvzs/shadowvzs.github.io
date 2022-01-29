export const tagItemCmp = (app, tag) => {
    const { store } = app;
    const isSelected = store.tagFilter.has(tag);

    return { 
        tagName: 'span', 
        attributes: { 
            className: ['tag-item', isSelected && 'active'],
            onClick: () => store.toggleTagFilter(tag)
        }, 
        children: [ store.tagsMap[tag].replace('_', ' ') ] 
    };
}