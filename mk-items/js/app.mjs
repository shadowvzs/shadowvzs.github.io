import store from './logic/store.mjs'
import { MainPage } from './ui/MainPage.mjs'

export class App {

    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.store = store;

        // initialize the main component and mount into DOM
        const mainPage = new MainPage(store);
        mainPage.mount(this.container);
    }
}