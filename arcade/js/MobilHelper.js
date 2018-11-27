class MobilHelper {

    constructor(core, player) {
        this.core = core;
        this.player = player;
        this.createEvents();
    }

    createEvents() {

        document.ontouchstart = ev => {
            this.startX = ev.touches[0].clientX;
            this.startY = ev.touches[0].clientY;
        }

        document.ontouchend = ev => {
            if (!this.player.ready || !this.core.status) {
                return;
            }
            this.endX = ev.changedTouches[0].clientX;
            this.endY = ev.changedTouches[0].clientY;
            const dX = this.endX - this.startX,
                dY = this.endY - this.startY;

            if (dX == 0 && dY == 0) {
                return;
            }

            let direction;
            if (Math.abs(dX) > Math.abs(dY)) {
                direction = ['x', Math.sign(dX) * tileSize.x];
            } else {
                direction = ['y', Math.sign(dY) * tileSize.y];
            }
            alert(JSON.stringify(direction));
            this.player.update();
        }
    }

    createInterface(core) {
        /*
        const dom = core.container;
        this.container = document.createElement('div');
        this.container.classList.add('infobar');
        this.elements.push(
            new ScoreInfo(core, this),
            new LifeInfo(core, this),
            new LevelInfo(core, this),
            new StatusInfo(core, this)
        );
        this.core = core;
        dom.appendChild(this.container);                
        }

        render() {
        for (const elem of this.elements) {
            elem.render();
        }
        */
    }    

    //inRange(obj1, obj2) {
    //     return obj1 && obj2 && Math.abs(obj1.x - obj2.x) < tileSize.x / 2 && Math.abs(obj1.y - obj2.y) < tileSize.y / 2
    //}


}