import { tagListCmp } from './tagListCmp.mjs';
import { tagSelectCmp } from './tagSelectCmp.mjs';
    // const onChange = (tagId) => {
    //     const { store } = app;
    //     items.forEach(tag => {
    //         if (tag.id === tagId) {

    //         } else {

    //         }
    //     });
    // }
export const tagGroupCmp = ({ app, tagGroup }) => {
    const { store } = app;
    const { items, name } = tagGroup;
    let childCmp;

    let props = { 
        app, 
        items, 
        tagsMap: store.tagsMap, 
        name,
        type: 'number',
    };

    if (tagGroup.render === 'select') {
        props.value = store.getTagGroupValue(tagGroup.id);
        props.onChange = (tagId) => store.setTagGroupValue(tagGroup.id, tagId);
        childCmp = tagSelectCmp;
    } else {
        childCmp = tagListCmp;
        props.onChange = (tagId) => store.toggleTagFilter(tagId);
    }

    return { 
        tagName: 'section', 
        attributes: { 
            className: ['tag-group'],
            // onClick: () => store.toggleTagFilter(tag)
        }, 
        children: [
            childCmp(props)
        ]
    };
}