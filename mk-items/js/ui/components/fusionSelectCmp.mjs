import { romanNumbers } from '../../data/other.mjs';

const optionValues = (new Array(11)).fill(1).map((_, idx) => romanNumbers[idx]);

export const fusionSelectCmp = (app, item) => {

    const options = optionValues.map(val => ({    
        tagName: 'option', 
        attributes: { 
            value: val,
            selected: optionValues[item.fusion] === val
        }, 
        children: [String(val)]      
    }));

    return {
        tagName: 'select', 
        attributes: { 
            className: 'fusion-select',
            onChange: (ev) => {
                item.setFusion(optionValues.indexOf(ev.target.value));
                app.refresh();
            },
        }, 
        children: options
    }
}
