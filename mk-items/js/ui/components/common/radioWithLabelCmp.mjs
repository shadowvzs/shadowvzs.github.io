export const radioWithLabelCmp = ({ name, label, ...rest }) => {
    return {
        tagName: 'label',
        attributes: { className: 'input-wrapper' },
        children: [
            {
                tagName: 'input',
                attributes: {
                    type: 'radio',
                    name: name,
                    ...rest
                },
                children: []
            },
            label
        ]
    };
};
