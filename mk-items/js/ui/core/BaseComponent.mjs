import global from '../../data/global.mjs';

export class BaseComponent {
    currentElement = null;
    parentElem = null;

    constructor() {
        this.refresh = this.refresh.bind(this);
        global.refresh = this.refresh;
    }

    renderElement(data) {
        if (typeof data !== 'object') {
            if (typeof data === 'string') {
                return document.createTextNode(data);
            } else if (typeof data === 'number') {
                return document.createTextNode(String(data));
            }
        }
        const { tagName, attributes, children } = data;
        const element = document.createElement(tagName.toUpperCase());
        if (typeof attributes === 'object') {
            for (let attributeName in attributes) {
                let value = attributes[attributeName];
                if (attributeName.startsWith('on')) {
                    attributeName = attributeName.toLowerCase();
                } else if (attributeName === 'className' && Array.isArray(value)) {
                    value = value.filter(Boolean).join(' ');
                }
                element[attributeName] = value;
            }
        }
        if (Array.isArray(children)) {
            for (const child of children) {
                if (!child) { continue; }
                element.appendChild(this.renderElement(child));
            }
        }
        return element;
    }

    // initial we can mount component with this callback
    mount(parentElement) {
        const elem = this.render();
        if (this.currentElement) {
            this.currentElement.replaceWith(elem);
        } else {
            parentElement.appendChild(elem);
        }
        this.currentElement = elem;
        this.parentElem = parentElement;
    }

    refresh() {
        this.mount(this.parentElem);
    }
}