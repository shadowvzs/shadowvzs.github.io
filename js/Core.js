class Core {

    constructor() {
        this.createInterface();
        this.resources = new Resource();
        this.resources.onReady(this.start.bind(this));
        this.player = new Player(this, "images/char-boy.png");
        this.infobar = new Infobar(this);   
		this.misc = [];
        this.status = false;
    }

    createInterface() {
        this.container = document.createElement('div');
        this.container.classList.add("game-container");
        this.container.appendChild(this.createCanvas());
        document.body.appendChild(this.container);
    }


    createCanvas() {
        const canvas = document.createElement('canvas');
        this.ctx = canvas.getContext('2d');
        canvas.width = 500;
        canvas.height = 600;
        return canvas;       
    }

    start(init = false) {
        this.reset();
        this.status = !init;
        const enemyCount = 2;
        let i = 0
        while(i < enemyCount) {
            i++;
            const rnd = Math.random() * 2000;
            setTimeout(() => this.allEnemies.push(new Enemy(this)), rnd );
        }
        this.run();
		const win = this.container.querySelectorAll('.maximize');
		if (win) {
			win.forEach( w => w.classList.remove('maximize') );
		}
    }

    levelUp() {
        this.level++;
        this.infobar.render();        
        const rnd = Math.random() * 1000;
		(this.level % 7 == 0) && setTimeout( _ => this.allEnemies.push(new Enemy(this)), rnd );       
        this.misc = [];
        if ((Math.random() * 100) < (this.level / 2 + 30)) {
			this.misc.push(new Misc(this));
		}
	}
	
    toggleStatus() {
        this.status = !this.status;
        this.status && this.start();
        this.infobar.render();
    }

    reset() {
        this.allEnemies = [];
		this.miscs = [];
        this.level = 1;
        this.player.life = 3;
        this.player.score = 0;
        this.infobar.render();
        this.lastTime = 0;
    }

    run() {
        const now = Date.now(),
            dt = (now - this.lastTime) / 1000.0;
        this.update(dt);
        this.render();
        this.lastTime = now;
        this.status && window.requestAnimationFrame(this.run.bind(this));
    }

    update(dt) {
        const player = this.player;
        this.allEnemies.forEach( enemy => {
            enemy.update(dt);
            if ( this.player.ready && enemy.inRange(enemy, player)) {
                this.player.ready = false;
                this.player.life--;
                this.infobar.render();
                setTimeout( () => this.player.reset(), 100)
            }
        });  
    }

    render() {
        const rowImages = [
                'images/water-block.png',
                'images/stone-block.png',
                'images/stone-block.png',
                'images/stone-block.png',
                'images/grass-block.png',
                'images/grass-block.png'
            ],
            numRows = 6,
            numCols = 5,
			{width, height} = this.ctx.canvas;
        let row, col;

        this.ctx.clearRect(0,0,width,height);

        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                this.ctx.drawImage(this.resources.getImage(rowImages[row]), col * tileSize.x, row * tileSize.y);
            }
        }

        this.allEnemies.forEach(enemy => enemy.render() );
        this.misc.forEach(misc => misc.render() );
        this.player.render();     
    }
} 