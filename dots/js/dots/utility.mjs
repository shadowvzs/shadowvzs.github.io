// helper method - to create elements
export function createElement(name, attrs = {}, children = []) {
    const el = document.createElement(name);

    // set attributes
    Object.entries(attrs).forEach(([propName, propValue]) => {
        if (propName.startsWith('on')) {
            el[propName] = propValue;
        } else {
            el.setAttribute(propName, propValue);
        }
    });

    children.forEach(child => {
        let node;
        if (typeof child === 'string') {
            node = document.createTextNode(child);
        } else if (child instanceof HTMLElement) {
            node = child;
        } else if (Array.isArray(child)) {
            node = createElement(child);
        }

        if (node) { el.appendChild(node); }
    });

    return el;
}

export const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
}

export const getRandomDegree = () => {
    return Math.floor(Math.random() * 360);
}

export const getRandomBetween = (min, max) => {
    return Math.random() * (max - min) + min;
}

export const getAbsDiff = (val1, val2) => {
    const max = Math.max(val2, val1);
    const min = Math.min(val2, val1);
    return max - min;
}