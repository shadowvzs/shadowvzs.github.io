import { Store } from './logic/store.mjs'
import { MainPage } from './ui/MainPage.mjs'

export class App {

    toggleAsideCollapsible() {
        this.asideCollapsed = !this.asideCollapsed;
        this.refresh();
    }
    
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.store = new Store(this);
        this.refresh = () => {}; // we will have this callback when Main Page is instantiated
        
        this.asideCollapsed = document.body.clientWidth < 578;
        // initialize the main component and mount into DOM
        const mainPage = new MainPage(this);
        mainPage.mount(this.container);
    }
}