"use strict" 

var audioPlayer = (function() {
	let audio = new Audio(), str = '', id = Math.random().toString(36).substr(2, 9),
		player = { 
			dom: {
				// this 2 is for test
				toggleButton: document.getElementById('toggleApp'),
				destroyButton: document.getElementById('destroyApp'),
				//rest is needed
				app: document.querySelector('#audioPlayer'),
				head: document.querySelector('.header'),
				list: document.querySelector('.list'),
				main: document.querySelector('.details'),
				duration: null,
				currentTime: null,
				title: null,
				volume: null,
				spearkerIcon: null,
				loopIcon: null,
				anchorIcon: null,
				randomIcon: null,
				container: null,
				close: null,
			},
			list: [
				{ title: 'Szabaditó - Győzelem Gyülekezet', src: 'gyozelem.ro/mp3/szabadito-gyozelem-gyulekezet.mp3', duration: 0 },
{ title: 'Eljöttél - Győzelem Gyülekezet', src: 'gyozelem.ro/mp3/eljottel-gyozelem-gyulekezet.mp3', duration: 0 },
			],
			button: {
				play: {},
				pause: {},
				stop: {},
			},
			currentSong: -1,
			play: false,
			currentTime: 0,
			loop: true,
			anchor: false,
			random: false,
			select(index) {
				if (player.currentSong !== -1) {
					document.getElementById("audio_"+id+"_"+player.currentSong).classList.remove('selected');
				}
				player.handler.stop();
				player.currentSong = index;
				player.handler.play();					
			},
			handler: {
				play() {
					if (player.play) { return; }
					let dom = player.dom;
					if (player.currentSong === -1) { 
						player.currentSong = 0; 
					}
					player.play = true;
					let currentSong = player.list[player.currentSong];
					audio.src = currentSong.src;
					audio.play();
					document.getElementById("audio_"+id+"_"+player.currentSong).classList.add('selected');
					dom.title.innerHTML = currentSong.title;
					dom.title.title = currentSong.title;
					dom.duration.innerHTML = currentSong.duration;
					dom.currentTime.classList.remove('blink');
				},
				stop(){
					let dom = player.dom;
					player.currentTime = 0;
					dom.currentTime.innerHTML = getDuration(player.currentTime);
					dom.track.value = 0;
					audio.pause();
					player.play = false;
					dom.currentTime.classList.remove('blink');
				},
				pause(){
					if (!player.play) { return; }
					player.currentTime = ~~audio.currentTime;
					audio.pause();
					player.play = false;
					player.dom.currentTime.classList.add('blink');
				},
				change(e){
					let index = e.target.dataset.index;
					if (index) { player.select(e.target.dataset.index); }
				},
				changeLoopHandler(){
					// 1 - true = 0 or 1 - false =  1 :) i love this
					player.loop = 1 - player.loop; 
					player.dom.loopIcon.classList[player.loop ? 'add' : 'remove']('select');
				},
				changeAnchorHandler(){
					// tenary :)
					player.anchor = player.anchor ? false : true;
					player.dom.anchorIcon.classList[player.anchor ? 'add' : 'remove']('select');
				},
				changeRandomHandler(){
					// another method :)
					player.random = !player.random;
					player.dom.randomIcon.classList[player.random ? 'add' : 'remove']('select');
				},
				setVolume (e){
					setVolume(e.target.value);
				}, 		
				audioEnded (){
					if (player.loop) {
						let currentSong = player.currentSong, index; 
						
						if (player.anchor) {
							index = currentSong;
						} else if (player.random) {
							index = ~~(Math.random() * player.list.length);
						} else {
							index = (+currentSong+1) < player.list.length ? +currentSong + 1 : 0;
						}
							
						player.select(index);
					}
				},							
			}
		}, dummyAudio = [], dummyLen = player.list.length, 

		setCurrentTime = function(){
			audio.currentTime = ~~player.currentTime;
		}, 
		setVolume = function(vol){
			let icons = ['&#x1f508;', '&#x1f509;', '&#x1f50a;'],
				icon = icons[0];
			audio.volume = vol/100;
			if (vol > 30) {
				icon = icons[2];
			}else if(vol > 1) {
				icon = icons[1];
			}
			player.dom.spearkerIcon.innerHTML = icon;
		}, 					
		setTrackMaxValue = function (){
			player.dom.track.max = ~~audio.duration;
	
		},
		setTrack = function(e){
			let val = e.target.value;
			audio.currentTime = val;
			player.dom.currentTime.innerHTML = getDuration(val);
		}, 
		keys = Object.keys(player.button), handler, listTimer, playTimer, playlist;
	//  ---- variable declaration end ---- 
		
	(function init(){
		let dom = player.dom, main = dom.main, handler = player.handler;
		dom.duration = main.querySelector('.duration');
		dom.currentTime = main.querySelector('.currentTime');
		dom.title = main.querySelector('.title');
		dom.volume = main.querySelector('.volume');
		dom.track = main.querySelector('.track');
		dom.container = dom.app.querySelector('.container');
		dom.spearkerIcon = main.querySelector('.speaker_icon');
		dom.loopIcon = main.querySelector('.loop_icon');			
		dom.anchorIcon = main.querySelector('.anchor_icon');			
		dom.randomIcon = main.querySelector('.random_icon');			
		dom.close = dom.app.querySelector('.close');			
		
		audio.addEventListener('play', setCurrentTime);
		audio.addEventListener('loadedmetadata', setTrackMaxValue);
		
		// this 2 is for test
		dom.toggleButton.addEventListener('click', toggle);
		dom.destroyButton.addEventListener('click', destroy);
		// rest needed
		dom.volume.addEventListener('change', handler.setVolume);
		dom.track.addEventListener('change', setTrack);
		dom.loopIcon.addEventListener('click', handler.changeLoopHandler);
		dom.anchorIcon.addEventListener('click', handler.changeAnchorHandler);
		dom.randomIcon.addEventListener('click', handler.changeRandomHandler);
		dom.close.addEventListener('click', toggle);
		audio.addEventListener('ended', handler.audioEnded);
		
		Object.keys(player.button).forEach(function(b){
			player.button[b] = main.querySelector('.'+b);
			player.button[b].addEventListener('click', player.handler[b] );
		});
		
		setVolume(dom.volume.value);
		player.loop = !player.loop;
		player.anchor = !player.anchor;
		player.random = !player.random;
		handler.changeLoopHandler();
		handler.changeAnchorHandler();
		handler.changeRandomHandler();
		
		player.list.forEach((a, i) => {
			dummyAudio[i] = [new Audio(), i];
			dummyAudio[i][0].src = a.src;
		});
		
		
		listTimer = setInterval(() => { 
			if (dummyLen === 0) {
				clearInterval(listTimer);
				loadList();
			}
			dummyAudio.forEach( (a, i) => {
				if (a && a[0].readyState > 0) {
					player.list[a[1]].duration = getDuration(~~a[0].duration);
					dummyAudio.splice(i, 1);
					dummyLen--;
				}
			});
			
		}, 200);

	})();
	
	function getDuration(s=0) {
		return ('00'+~~(s/60)).slice(-2)+':'+('00'+s%60).slice(-2);
	}
	
	// when all audio is ready to play then we insert to playlist
	function loadList() {
		var str = "", dom = player.dom;
		player.list.forEach((a, i) => {
			str += '<li id="audio_'+id+'_'+i+'" data-index="'+i+'" title="'+a.title+'">'+a.title+' - <span data-index="'+i+'"> '+a.duration+' </span></li>';
		});
		dom.list.insertAdjacentHTML('afterbegin', '<ul id="playlist_'+id+'">'+str+'</ul>');
		playlist = document.getElementById("playlist_"+id);
		playlist.addEventListener('click', player.handler.change);
		dom.container.style.display = 'block';	
		
		// we add our custom scrollbar and drag and drop functionality to window
		dragdrop(dom.app, dom.head);
		player.scrollBar = new ScrollBar("#audioPlayer .container");
	}
	
	playTimer = setInterval(() => { 
		if (player.play) {
			player.dom.track.value = ~~audio.currentTime;
			player.dom.currentTime.innerHTML = getDuration(~~audio.currentTime);
		}
	}, 1000);	
	
	function destroy() {
		let dom = player.dom, handler = player.handler;
		clearTimeout(listTimer);
		clearInterval(playTimer);
		audio.pause();		
		audio.removeEventListener('play', setCurrentTime);
		audio.removeEventListener('loadedmetadata', setTrackMaxValue);
		dom.volume.removeEventListener('change', handler.setVolume);
		dom.track.removeEventListener('change', setTrack);
		dom.loopIcon.removeEventListener('click', handler.changeLoopHandler);
		dom.anchorIcon.removeEventListener('click', handler.changeAnchorHandler);
		dom.randomIcon.removeEventListener('click', handler.changeRandomHandler);
		dom.close.removeEventListener('click', toggle);
		audio.removeEventListener('ended', handler.audioEnded);
		Object.keys(player.button).forEach(function(b){
			player.button[b].removeEventListener('click', player.handler[b] );
		});	
		// this 2 for test
		dom.toggleButton.removeEventListener('click', toggle);
		dom.destroyButton.removeEventListener('click', destroy);
		dom.app.outerHTML = "";
		dom.destroyButton.outerHTML = "";
		dom.toggleButton.outerHTML = "";
	}
	
	function toggle (){
		let app = player.dom.app;
		app.style.display = app.style.display === "none" ? "block" : "none";
	}
	
	return {
		destroy () {
			destroy();
		},
		toggle () {
			toggle();
		},
	}

	function ScrollBar(containerDOM) {
		let container = (typeof containerDOM === "string" 
				? document.querySelector(containerDOM) 
				: containerDOM) || null,
			content = container.querySelector(".content") || null,
			scrollBar = container.querySelector("input[type=range]") || null;
		
		if (!container || !content || !scrollBar) { return console.log('missing one or more dom element (ex. container[div], .content[div], .scrollBar[input=type[range]])'); }
		
		let	cntnrH = container.offsetHeight,
			scrllH = content.scrollHeight,
			diffH = scrllH - cntnrH+20,
			scrllBrH = scrollBar.offsetHeight;

		if (scrllH < cntnrH) {
			return scrollBar.outerHTML = "";
		}
		scrollBar.style.width = cntnrH-20;
		scrollBar.style.right = (scrllBrH-cntnrH/2+10)+'px';
		scrollBar.addEventListener('change', () => {
			content.scrollTop = diffH/100*scrollBar.value;
		});
		
		content.addEventListener('scroll', () => {
			scrollBar.value = 100/(scrllH-cntnrH+20)*content.scrollTop;
		});
	};
	
	function dragdrop(e1, e2 = null) {
		e1 = typeof e1 === "string" ? document.body.querySelector(e1) : e1;
		e2 = typeof e1 === "string" ?  document.body.querySelector(e2 || e1) : e2;
		e2.addEventListener('mousedown', dragHandler);
		let body = document.body,
			html = document.documentElement,
			eWidth = e1.offsetWidth,
			eHeight = e1.offsetHeight,
			mWidth = Math.max(body.offsetWidth, html.offsetWidth)-eWidth,
			mHeight =  Math.max(body.offsetHeight, html.offsetHeight)-eHeight,
			cX, cY, x, y, pos = e1.style.position,
			shiftX, shiftY,
			moving = false;
		console.log(e1);
		e1.style.position = 'fixed';
		function move(x, y) {
			e1.style.left = x+'px';
			e1.style.top = y+'px';
		}
		
		function mousemove (e) {
			x = e.clientX-shiftX;
			y = e.clientY-shiftY;
			cX = x >  mWidth ? mWidth : x < 0 ? 0 : x;
			cY = y >  mHeight ? mHeight : y < 0 ? 0 : y;

			move(cX, cY);
		}

		function mouseup () {
			body.removeEventListener('mousemove', mousemove);
			body.removeEventListener('mouseup', mouseup);	
			moving = false;
		}
		
		function dragHandler(e){
			if (moving) return;
			moving = true;
			body.addEventListener('mousemove', mousemove);
			// use window => mouse could be released when pointer isn't over the body
			window.addEventListener('mouseup', mouseup);	
			console.log('mouse up - draghandler');
			shiftX = e.clientX - e1.offsetLeft;
			shiftY = e.clientY - e1.offsetTop;
		}
		
		return {
			remove() {
				body.removeEventListener('mousemove', mousemove);
				window.removeEventListener('mouseup', mouseup);	
				e2.removeEventListener('mousedown', dragHandler);
			}
		}
	}


	
})();