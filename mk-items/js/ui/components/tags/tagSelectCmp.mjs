import { selectCmp } from "../common/selectCmp.mjs";

export const tagSelectCmp = ({ app, name, items, tagsMap, ...props }) => {

    const options = items.map(tag => ({
        label: tagsMap[tag.id].replace(/_/g, ' '),
        value: tag.id
    }));

    return { 
        tagName: 'div', 
        attributes: { className: 'tag-select' }, 
        children: [
            {
                tagName: 'p',
                children: [ name ]
            },
            selectCmp({ 
                items: [{ label: 'None', value: 0 }, ...options], 
                ...props
            })
        ] 
    };
}