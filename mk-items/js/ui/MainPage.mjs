import { BaseComponent } from "./core/BaseComponent.mjs";
import { mainHeaderCmp } from "./components/mainHeaderCmp.mjs";
import { mainContentCmp } from "./components/mainContentCmp.mjs";
import { mainFooterCmp } from "./components/mainFooterCmp.mjs";
import { mainAsideCmp } from "./components/mainAsideCmp.mjs";

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