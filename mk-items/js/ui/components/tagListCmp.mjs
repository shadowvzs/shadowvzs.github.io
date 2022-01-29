import { tagItemCmp } from "./tagItemCmp.mjs";

export const tagListCmp = (app) => {
    const { store } = app;

    const items = store.tags.map(tag => tagItemCmp(app, tag));

    return { 
        tagName: 'section', 
        attributes: { className: 'tag-list' }, 
        children: items 
    };
}