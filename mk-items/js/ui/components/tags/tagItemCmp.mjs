export const tagItemCmp = ({ app, tag, onChange }) => {
    const { store } = app;
    const isSelected = store.tagFilter.has(tag);

    return { 
        tagName: 'span', 
        attributes: { 
            className: ['tag-item', isSelected && 'active'],
            onClick: () => onChange(tag)
        }, 
        children: [ store.tagsMap[tag].replace(/_/g, ' ') ] 
    };
}