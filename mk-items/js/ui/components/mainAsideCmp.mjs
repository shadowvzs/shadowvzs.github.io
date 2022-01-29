import { tagListCmp } from "./tagListCmp.mjs";

export const mainAsideCmp = (app) => {
    return { 
        tagName: 'aside', 
        attributes: { className: 'main-aside' }, 
        children: [
            tagListCmp(app)
            // { 
            //     tagName: 'button', 
            //     attributes: { onclick: () => alert('1') }, 
            //     children: ['+'] 
            // }
        ] 
    };
}