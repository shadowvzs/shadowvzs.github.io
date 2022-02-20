import { itemContainerCmp } from "../items/itemContainerCmp.mjs";

export const mainContentCmp = (store) => {

    return {
        tagName: 'main',
        attributes: { className: 'main-content' },
        children: [
            itemContainerCmp(store)
        ]
    };
}