import { tagItemCmp } from "./tagItemCmp.mjs";

export const tagListCmp = ({ app, name, items, onChange }) => {

    return { 
        tagName: 'div', 
        attributes: { className: 'tag-list' }, 
        children: [
            {
                tagName: 'p',
                children: [ name + ': ' ]
            },
            ...items.map(tag => tagItemCmp({ 
                app, 
                onChange: onChange,
                tag: tag.id,
            }))
        ]
    };
}