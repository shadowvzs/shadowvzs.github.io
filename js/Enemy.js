class Enemy extends Entity {

    constructor(core) {
        super(core, 'images/enemy-bug.png', [tileSize.x * 2, 0]);
        this.placeEnemy();
        this.setSpeed();
    }

    update(dt) {
        if (this.x > this.maxWidth) {
            this.setSpeed();
            this.placeEnemy();
        } else {
            this.x += this.speed * dt; 
        }
    }

    setSpeed() {
        const speed = ~~(this.core.level ** 1.5) + 50;
        this.speed = Math.round(Math.random() * speed * 2) + speed;
    }

    placeEnemy() {
        const row = Math.round(Math.random() * 2);
        this.x = tileSize.x * ~~(Math.random() * 2 - 2);
        this.y = (row + 0.5) * tileSize.y;
    }

    render() {
        this.ctx.drawImage(this.resources.getImage(this.sprite), this.x, this.y);
    }
}