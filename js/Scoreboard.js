class Scoreboard {

	constructor (core, scoreInfo) {
		this.status = false;
		this.player = core.player;
		this.scoreInfo = scoreInfo;
		this.inforbar = scoreInfo.parent;
		this.createInterface(core);
		this.render();
		this.inforbar.updateScore = this.updateScore.bind(this);
	}

	toggle() {
		this.container.classList.toggle('maximize');
	}
	
	getScoreHistory() {
		return this.scores || JSON.parse(localStorage.getItem('scores') || '[]');
	}
	
	saveScoreHistory(scores) {
		localStorage.setItem('scores', JSON.stringify(scores));
	}
	
	updateScore() {
		const scores = this.getScoreHistory(),
			{ name, score } = this.player;
		if (scores.length == 0) {
			scores.push([name, score]);
		} else {
			const len = scores.length;
			for (let i=0; i<len;i++) {
				if (scores[i][1] < score) {
					scores.splice(i, 0, [name, score]);
					break;
				}
			}
			scores.push([name, score]);
		}
		this.saveScoreHistory(scores.splice(0, 10));
		this.render();
		this.toggle();
	}
	
	createInterface(core) {
		const dom = core.container;
		this.container = document.createElement('div');
		this.container.classList.add('scoreboard');
		this.core = core;
		dom.appendChild(this.container);		
	}
	
	render() {
		const scores = this.getScoreHistory();
		let str = "<h2>Scores:</h2>";
		if (!scores || !scores.length) {
			str += "... empty ..."
		} else {
			for (const [name, score] of scores) {
				str += `${name} - ${score} <br \>`;
			}
		}
		this.container.innerHTML = str;
	}

}