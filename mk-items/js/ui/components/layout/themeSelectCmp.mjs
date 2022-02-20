import { radioWithLabelCmp } from '../common/radioWithLabelCmp.mjs';

export const themeSelectCmp = (store) => {
    return {
        tagName: 'fieldset',
        attributes: { className: 'theme-select-wrapper' },
        children: [
            radioWithLabelCmp({
                label: 'light',
                onChange: (e) => store.setTheme(e.target.value),
                value: 'light',
                name: 'theme',
                checked: store.theme === 'light'
            }, 'normal'),
            radioWithLabelCmp({
                label: 'dark',
                onChange: (e) => store.setTheme(e.target.value),
                value: 'dark',
                name: 'theme',
                checked: store.theme === 'dark'
            }),
        ]
    };
};
