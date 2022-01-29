import { viewModeSelectCmp } from './viewModeSelectCmp.mjs';

export const mainHeaderCmp = (app) => {
    return { 
        tagName: 'header', 
        attributes: { className: 'main-header' }, 
        children: [
            'header',
            viewModeSelectCmp(app),
        ] 
    };
};
