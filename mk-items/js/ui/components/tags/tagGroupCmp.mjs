import { tagListCmp } from './tagListCmp.mjs';
import { tagSelectCmp } from './tagSelectCmp.mjs';

export const tagGroupCmp = ({ filter, tagGroup }) => {
    const { items, name } = tagGroup;

    let childCmp;

    const props = {
        items,
        name,
        filter,
        type: 'number',
    };

    if (tagGroup.render === 'select') {
        props.value = filter.getTagGroupValue(tagGroup.id);
        props.onChange = (tagId) => filter.setTagGroupValue(tagGroup.id, tagId);
        childCmp = tagSelectCmp;
    } else {
        childCmp = tagListCmp;
        props.onChange = (tagId) => filter.toggleTagFilter(tagId);
    }

    return {
        tagName: 'section',
        attributes: { className: ['tag-group'] },
        children: [
            childCmp(props)
        ]
    };
}