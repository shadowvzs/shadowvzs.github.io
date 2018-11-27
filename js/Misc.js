class Misc extends Entity {
    constructor(core) {
		const miscSprites = core.resources.miscs,
			img = miscSprites[~~(Math.random()*miscSprites.length)],
			x = ~~(Math.random() * 4),
			y = ~~(Math.random() * 4) + 0.5;
		super(core, img, [tileSize.x * x, tileSize.y * y]);
		this.setOption(img);
		this.render();
    }
	
	setOption(img) {
		const options = {
				'obj-gem1.png': { score: 100},
				'obj-gem2.png': { score: 200},
				'obj-gem3.png': { score: 300},
				'obj-hear.png': { life: 1},
				'obj-lkey.png': { level: 1},
				'obj-rock.png': { block: true}
			},
			type = img.substr(-12);
		
		if (!options[type]) {
			return;
		}
		this.option = options[type];
	}

    render() {
        this.ctx.drawImage(this.resources.getImage(this.sprite), this.x, this.y);
    }
}
