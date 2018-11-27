class Player extends Entity {

    constructor(core, avatar) {
        super(core, avatar, [tileSize.x * 2, tileSize.y * 4.5]);
        this.name = "New player";
        document.addEventListener('keyup', e => this.inputHandler(e) );
        this.ready = true;
        this.profile = new Profile(core, this);
    }

    inputHandler(e) {
        const directions = {
            37: ['x', -tileSize.x],
            38: ['y', -tileSize.y],
            39: ['x', tileSize.x],
            40: ['y', tileSize.y]           
        },
        code = e.keyCode;
        directions[code] && this.core.status && this.ready && this.update(directions[code]);
    }

    update([axis, step] = []) {
        this.prevX = this.x;
        this.prevY = this.y;
        if ((axis == "x" && (this.x + step) < 0) ||
            (axis == "x" && (this.x + step) >= this.maxWidth) ||
            (axis == "y" && step < 0 && (this.y + step) < step) ||
            (axis == "y" && (this.y + step * 3) > this.maxHeight)) {
            return;
        } 
        this[axis] += step;

        const misc = this.core.misc;
        misc.forEach( obj => {
            if (this.ready && this.inRange(this, obj)) {
                this.pickMisc(obj);
            }
        });  

        this.render();
        if (this.y < 0) {
            this.ready = false;
            setTimeout( _ => {
                this.core.levelUp();
                this.score += ~~(this.core.level * 1.50) + 10; 
                this.reset();
                this.ready = true;
				this.core.infobar.render();
            }, 300);
        }
    }

    pickMisc(misc) {
        const [bonus, value] = Object.entries(misc.option)[0];
        console.log(bonus);
        switch(bonus) {
            case "block":
                this.x = this.prevX;
                this.y = this.prevY;
                break;
            case "score":
                this.score += value;
                break;              
            case "life":
                this.life += value;
                break;              
           case "level":
                this.core.levelUp();
                this.reset();
                break;              
        }
        if (bonus != "block") {
            const index = this.core.misc.indexOf(misc);
            (index > -1) && (delete this.core.misc[index]);
            this.core.infobar.render();
        }
    }

    reset() {
        this.x = tileSize.x * 2;
        this.y = tileSize.y * 4.5;
        this.ready = true;  
        if (this.life > 0) {
            this.render();
        } else {
			this.core.infobar.updateScore();
            this.core.toggleStatus();
			
        }      
    }

    render() {
        this.ctx.drawImage(this.resources.getImage(this.sprite), this.x, this.y);
    }
}
