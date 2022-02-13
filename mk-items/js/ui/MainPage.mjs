import { BaseComponent } from "./core/BaseComponent.mjs";
import { mainHeaderCmp } from "./components/layout/mainHeaderCmp.mjs";
import { mainContentCmp } from "./components/layout/mainContentCmp.mjs";
import { mainFooterCmp } from "./components/layout/mainFooterCmp.mjs";
import { mainAsideCmp } from "./components/layout/mainAsideCmp.mjs";

export class MainPage extends BaseComponent {
    
    constructor(app) {
        super();
        this.app = app;
        app.refresh = this.refresh;
    }

    render() {
        return this.renderElement({ 
            tagName: 'section', 
            attributes: { className: 'main-page' }, 
            children: [
                mainHeaderCmp(this.app),
                mainContentCmp(this.app),
                mainAsideCmp(this.app),
                mainFooterCmp(this.app),
            ] 
        });
    }
}