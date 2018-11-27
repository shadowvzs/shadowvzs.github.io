class MobilHelper {

    constructor(core, player) {
        this.core = core;
        this.player = player;
        this.createEvents();
    }

    createEvents() {
        document.ontouchstart = function(ev) {
            alert(ev.touches[0].clientX + ' start');
        }
        document.ontouchend = function(ev) {
            alert(ev.touches[0].clientX + ' start');
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