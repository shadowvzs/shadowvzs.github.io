import { selectCmp } from "../common/selectCmp.mjs";
import global from '../../../data/global.mjs';

export const tagSelectCmp = ({ filter, name, items, ...props }) => {
    const tagsMap = global.itemTags.valueMap;
    const options = items.map(tag => ({
        label: tagsMap[tag.id].name.replace(/_/g, ' '),
        value: tag.id
    }));

    return {
        tagName: 'div',
        attributes: { className: 'tag-select' },
        children: [
            {
                tagName: 'p',
                children: [name]
            },
            selectCmp({
                items: [{ label: 'None', value: 0 }, ...options],
                ...props
            })
        ]
    };
}