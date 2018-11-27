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
            this.endX = ev.changedTouches[0].clientX;
            this.endY = ev.changedTouches[0].clientY;
            const dX = this.endX - this.startX,
                dY = this.endY - this.startY;

            if (dX == 0 && dY == 0) {
                return alert('asdas');
            }

            let direction;
            if (Math.abs(dX) > Math.abs(dY)) {
                direction = dX > 0 ? 'right' : 'left';
            } else {
                direction = dY > 0 ? 'down' : 'up';
            }
            alert(direction);
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