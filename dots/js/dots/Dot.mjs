import { getAbsDiff } from './utility.mjs';

export class Dot {
    constructor(config) {
        this.areaBorders = config.areaBorders;
        this.ctx = config.ctx;
        this.degree = config.degree;
        this.x = config.x;
        this.y = config.y;
        this.color = config.color;
        this.size = config.size;
        this.speed = config.speed;
        window['setDegree'] = (d) => {
            this.degree = d;
        };
    }

    move = (tsDiff) => {
        const { x, y } = this.getNextStep(tsDiff);
        this.ctx.beginPath();
        this.ctx.arc(x, y, this.size, 0, 2 * Math.PI, true);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    getNextStep = (tsDiff) => {
        const distance = this.speed / tsDiff;
        const angle = this.degree * (Math.PI / 180)
        let nX = this.x + distance * Math.cos(angle);
        let nY = this.y + distance * Math.sin(angle);
        if (nX < this.areaBorders.x1) {
            const diff = getAbsDiff(270, this.degree);
            this.degree = 270 + (this.degree > 270 ? -diff : diff);
        } else if (nY < this.areaBorders.y1) {
            const diff = getAbsDiff(180, this.degree);
            this.degree = 180 + (this.degree > 180 ? -diff : diff);
        } else if (nX > this.areaBorders.x2) {
            const diff = getAbsDiff(90, this.degree);
            this.degree = 90 + (this.degree > 90 ? -diff : diff);
        } else if (nY > this.areaBorders.y2) {
            const diff = getAbsDiff(0, this.degree);
            this.degree = 0 + (this.degree > 0 ? 360 - diff : diff);
        } else {
            this.x = nX;
            this.y = nY;
        }
        return { x: this.x, y: this.y };

    }
}
