class Resource {
    
    constructor() {
        const files = [
            'images/stone-block.png',
            'images/water-block.png',
            'images/grass-block.png',
            'images/enemy-bug.png',
            'images/char-boy.png',
            'images/char-cat-girl.png',
            'images/char-horn-girl.png',
            'images/char-pink-girl.png',
            'images/char-princess-girl.png',
            'images/obj-lkey.png',
            'images/obj-hear.png',
            'images/obj-gem1.png',
            'images/obj-gem2.png',
            'images/obj-gem3.png',
            'images/obj-rock.png',
            'images/Selector.png',
            'images/Star.png'
            ];
		this.files = files;
		this.miscs = files.filter( e => e.includes('obj-') );
        this.resourceCache = {};
        this.readyCallbacks = [];
        files && this.loadImages(files);
    }

    loadImages(urlOrArr) {
        if(urlOrArr instanceof Array) {
            urlOrArr.forEach( url => this._loadImage(url) );
        } else {
            this._loadImage(urlOrArr);
        }
    }

    _loadImage(url) {
        if(this.resourceCache[url]) {
            return this.resourceCache[url];
        }
        const img = new Image();
        img.onload = _ => {
            this.resourceCache[url] = img;
            if(this.isReady()) {
                this.readyCallbacks.forEach( func => func(true));
            }
        };
        this.resourceCache[url] = false;
        img.src = url;
    }

    getImage(url) {
        return this.resourceCache[url];
    }

    onReady(func) {
        this.readyCallbacks.push(func);
    }

    isReady() {
        let ready = true;
        for(var k in this.resourceCache) {
            if(this.resourceCache.hasOwnProperty(k) && !this.resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }    
}