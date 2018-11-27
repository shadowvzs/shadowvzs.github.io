class Profile {

	constructor (core, player) {
		this.status = false;
		this.player = player;
		this.createInterface(core);
	}

	toggleStatus() {
		this.container.classList.toggle('maximize');
	}

	createInterface(core) {
		const dom = core.container;
		this.container = document.createElement('div');
		this.container.classList.add('profile');
		this.container.appendChild(this.createImageBox(core));
		this.container.appendChild(this.createInput(core));
		this.onclick = this.toggleStatus.bind(this);
		this.core = core;
		dom.appendChild(this.container);		
	}
	
	createImageBox(core) {
		const avatars = core.resources.files.filter( e => e.includes('/char-') );
		const container = document.createElement('div');
		container.classList.add('image-box');
		for (const avatar of avatars) {
			const img = document.createElement('img');
			img.src = avatar;
			img.onclick = this.selectAvatar.bind(this, avatar);
			if (this.player.sprite ==  avatar) {
				img.classList.add('selected');
				this.avatar = img;
			}
			container.appendChild(img);
		}
		return container;
	}
	
	createInput(core) {
		const container = document.createElement('div');
		const input = document.createElement('input');
		input.oninput = this.changePlayerName.bind(this);
		container.classList.add('input-box');
		input.type = "text";
		input.placeholder = "Your Name";
		input.value = this.player.name;
		container.appendChild(input);
		this.name = input;
		return container;
	}
	
	changePlayerName() {
		this.player.name = this.name.value;
	}
	
	selectAvatar(avatar) {
		if (this.avatar) {
			this.avatar.classList.remove('selected');
		}
		const target = this.container.querySelector(`img[src="${avatar}"]`);
		
		if (target) {
			target.classList.add('selected');
			this.avatar = target;
			this.player.sprite = avatar;
			this.player.render();
		}
	}

	render() {
		for (const elem of this.elements) {
			elem.render();
		}
	}

}