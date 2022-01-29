import { itemContainerCmp } from "./itemContainerCmp.mjs";

export const mainContentCmp = (app) => {
    return { 
        tagName: 'main', 
        attributes: { className: 'main-content' }, 
        children: [
            itemContainerCmp(app)
        ] 
    };
}