class Entity {
	constructor(core, sprite, [x, y] = []) {
        this.sprite = sprite;
		this.core = core;
        this.ctx = this.core.ctx;
        this.resources = this.core.resources;
        this.x = x;
        this.y = y;
		this.maxWidth = this.ctx.canvas.width;
		this.maxHeight = this.ctx.canvas.height;
	}

	inRange(obj1, obj2) {
		return obj1 && obj2 && Math.abs(obj1.x - obj2.x) < tileSize.x / 2 && Math.abs(obj1.y - obj2.y) < tileSize.y / 2
	}
}