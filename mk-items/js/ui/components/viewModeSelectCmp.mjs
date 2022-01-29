import { radioWithLabelCmp } from './radioWithLabelCmp.mjs';

export const viewModeSelectCmp = (app) => {
    const { store } = app;
    return {
        tagName: 'fieldset',
        attributes: { className: 'view-mode-select-wrapper' },
        children: [
            radioWithLabelCmp({
                label: 'normal',
                onChange: (e) => store.setViewMode(e.target.value),
                value: 'normal',
                name: 'viewMode',
                checked: store.viewMode === 'normal'
            }, 'normal'),
            radioWithLabelCmp({
                label: 'overlay',
                onChange: (e) => store.setViewMode(e.target.value),
                value: 'overlay',
                name: 'viewMode',
                checked: store.viewMode === 'overlay'
            }),
        ]
    };
};
