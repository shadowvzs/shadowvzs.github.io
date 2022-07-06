import { createElement, getRandomDegree, getRandomColor, getRandomBetween } from './utility.mjs';
import { Dot } from './Dot.mjs';

class GameController {

    constructor(rootSelector = 'body') {
        this.running = false;
        this.amount = 1;
        this.rootSelector = rootSelector;
        this.dots = [];
        this.lastRenderTs = performance.now();
        this.canvasSize = {
            width: 800,
            height: 640
        }

        this.container = createElement('section', { id: 'root' });
        this.amountInputElement = createElement('input', {
            type: 'number',
            value: this.amount,
            name: 'amount',
            min: 1,
            oninput: this.onAmountChange
        });
        this.toggleButtonElement = createElement('button', {
            onclick: this.onRunningToggle,
        }, ['Start']);
        this.canvasElement = createElement('canvas', {
            width: this.canvasSize.width,
            height: this.canvasSize.height,
            id: 'dotCanvas'
        });

        this.ctx = this.canvasElement.getContext('2d');
    }

    moveAll = () => {
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
        const tsDiff = performance.now() - this.lastRenderTs;
        this.dots.forEach(x => x.move(tsDiff));
        if (this.running) {
            this.lastRenderTs = performance.now();
            requestAnimationFrame(this.moveAll);
        }
    }

    onAmountChange = (ev) => {
        let value = parseInt(ev.target.value);
        if (isNaN(value) || value < 1) { value = 1; }
        this.amountInputElement.value = value;
        this.amount = value;
        this.onRunningToggle();
        setTimeout(() => {
            this.onRunningToggle();
        }, 100);
    }

    onRunningToggle = () => {
        this.running = !this.running;
        this.toggleButtonElement.innerText = this.running ? 'Stop' : 'Start';
        this.dots = [];
        if (!this.running) { return; }
        for (let i = 0; i < this.amount; i++) {
            const size = getRandomBetween(5, 20);
            this.dots[i] = new Dot({
                areaBorders: {
                    x1: size,
                    y1: size,
                    x2: this.canvasSize.width - size,
                    y2: this.canvasSize.height - size
                },
                ctx: this.ctx,
                degree: getRandomDegree(),
                x: getRandomBetween(size * 4, this.canvasSize.width - size * 4),
                y: getRandomBetween(size * 4, this.canvasSize.width - size * 4),
                color: getRandomColor(),
                size: getRandomBetween(5, 20),
                speed: getRandomBetween(50, 250),
            });
        }
        this.lastRenderTs = performance.now() - 5;
        this.moveAll();
    }

    init = () => {
        this.rootElem = document.querySelector(this.rootSelector);
        if (!this.rootElem) { throw new Error('element not found'); }

        [this.amountInputElement, this.toggleButtonElement, this.canvasElement].forEach(el => {
            this.container.appendChild(el);
        });
        this.rootElem.appendChild(this.container);
    }

    dispose = () => {
        this.amountInputElement.oninput = null;
        this.amountInputElement.remove();
        this.toggleButtonElement.onclick = null;
        this.toggleButtonElement.remove();
        this.canvasElement.remove();
    }
}


const controller = new GameController('#root');
window.addEventListener('DOMContentLoaded', controller.init);
