import { Store } from './logic/store.mjs'
import { MainPage } from './ui/MainPage.mjs'

export class App {

    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.store = new Store(this);
        this.refresh = () => {}; // we will have this callback when Main Page is instantiated

        // initialize the main component and mount into DOM
        const mainPage = new MainPage(this);
        mainPage.mount(this.container);
    }
}