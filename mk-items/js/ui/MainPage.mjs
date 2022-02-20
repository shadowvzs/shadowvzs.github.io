import { BaseComponent } from "./core/BaseComponent.mjs";
import { mainHeaderCmp } from "./components/layout/mainHeaderCmp.mjs";
import { mainContentCmp } from "./components/layout/mainContentCmp.mjs";
import { mainFooterCmp } from "./components/layout/mainFooterCmp.mjs";
import { mainAsideCmp } from "./components/layout/mainAsideCmp.mjs";

export class MainPage extends BaseComponent {

    constructor(store) {
        super();
        this.store = store;
    }

    render() {
        return this.renderElement({
            tagName: 'section',
            attributes: { className: 'main-page' },
            children: [
                mainHeaderCmp(this.store),
                mainContentCmp(this.store),
                mainAsideCmp(this.store),
                mainFooterCmp(this.store),
            ]
        });
    }
}