export const selectCmp = ({ items, value, onChange, optionProps, type, ...props }) => {

    const options = items.map(item => ({
        tagName: 'option',
        attributes: {
            value: item.value,
            selected: value === item.value ? true : undefined,
            ...optionProps
        },
        children: [item.label]
    }));

    const onChangeWrapper = (ev) => {
        let value = ev.target.value;
        if (type === 'number') {
            value = Number(value);
        }
        if (onChange) { onChange(value); }
    }

    return {
        tagName: 'select',
        attributes: { ...props, onChange: onChangeWrapper },
        children: options
    };
};
