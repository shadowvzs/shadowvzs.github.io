import { tagItemCmp } from "./tagItemCmp.mjs";

export const tagListCmp = ({ filter, name, items, onChange }) => {

    return {
        tagName: 'div',
        attributes: { className: 'tag-list' },
        children: [
            {
                tagName: 'p',
                children: [name + ': ']
            },
            ...items.map(tag => tagItemCmp({
                filter,
                onChange: onChange,
                tag: tag.id,
            }))
        ]
    };
}