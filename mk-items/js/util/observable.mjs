import global from "../data/global.mjs";

export function makeObservable(targetClass, options = {}) {
    return function (...args) {
        const handlers = {};
        const target = new targetClass(...args);
        const optionKeys = Object.keys(options);

        handlers.set = function (target, propName, value) {
            Reflect.set(target, propName, value);
            if (optionKeys.includes(propName)) { options[propName](value); }
            return true;
        }

        return new Proxy(target, handlers);
    }
}

export const reRender = () => global.refresh();
