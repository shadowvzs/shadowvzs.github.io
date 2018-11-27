class Infobar {

	constructor (core) {
        this.elements = [];
        this.createInterface(core);
	}

	createInterface(core) {
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
	}

}

class Info {
	constructor(core, parent) {
        this.parent = parent;
        this.player = core.player;
        this.core = core;
        this.DOM = document.createElement('div');
        parent.container.appendChild(this.DOM);
	}
}


class ScoreInfo extends Info {
	constructor (core, container) {
        super(core, container);
        this.DOM.onclick = this.toggleScore.bind(this);
        this.DOM.classList.add('pointer');
        this.scoreboard = new Scoreboard(core, this);
        this.status = false;
	}

	toggleScore() {
        this.status = !this.status;
        this.scoreboard.toggle();
	}

	render() {
        this.DOM.textContent = 'Score: ' + (this.player.score || 0);
	}
}

class LifeInfo extends Info {
	constructor (core, container) {
        super(core, container);
        const profile = core.player.profile;
        this.DOM.classList.add('pointer');
        this.DOM.onclick = profile.toggleStatus.bind(profile);
	}

	render() {
        this.DOM.textContent = 'Life: ' + (this.player.life || 0);
	}
}

class LevelInfo extends Info {
	constructor (core, container) {
        super(core, container);
	}

	render() {
        this.DOM.textContent = 'Lv: ' + (this.core.level || 0);
	}
}

class StatusInfo extends Info {
	constructor (core, container) {
        super(core, container);
        this.DOM.onclick = this.core.toggleStatus.bind(this.core);
        this.DOM.classList.add('pointer');
	}

	render() {
        const status = this.core.status ? 'Reset' : 'Start';
        this.DOM.textContent = status;
	}
}

