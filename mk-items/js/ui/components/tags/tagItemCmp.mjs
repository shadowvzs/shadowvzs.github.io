import global from '../../../data/global.mjs';

export const tagItemCmp = ({ tag, filter, onChange }) => {
    const tagsMap = global.itemTags.valueMap;
    const isSelected = filter.hasFilterTag(tag);

    return {
        tagName: 'span',
        attributes: {
            className: ['tag-item', isSelected && 'active'],
            onClick: () => onChange(tag)
        },
        children: [tagsMap[tag].name.replace(/_/g, ' ')]
    };
}