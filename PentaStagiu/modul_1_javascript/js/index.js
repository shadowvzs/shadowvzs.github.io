// instead iife i use scope, same result, inside everything private
{
    // use global variables
    const global = window;
    
    // Base object with setState
    class Base {
        constructor(channel = false, type = false) {
            if (channel) { 
                this.channel = channel;
                channel[this.constructor.name] = this;
            };
            (type) && ( this.DOM = document.createElement(type) );
        }

        createElement(type, classes = null, childs = null, attr = null) {
            const e = document.createElement(type);
            classes && (e.classList.add(...classes));
            if (childs && childs.length) {
                for (const child of childs) {
                    e.appendChild(child);
                }
            }
            if (attr) {
                for (const key in attr) {
                    e[key] = attr[key];
                }
            }
            return e;
        }

        setState(k, v) {
            this.state[k] = v;
            if (!this.DOM) {
                return;
            }
            const e = this.render();
            this.DOM.replaceWith(e);
            this.DOM = e;
        }
    }

    // Nav link obj
    class Nav extends Base {
        constructor(channel, text, targets) {
            super(null, 'a');
            this.parent = channel.NavBar;
            this.text = text;
            this.targets = targets;
            this.className = ['nav'];
            this.state = {
                selected: false
            };
        }

        setState(k, v) {
            // remove selected state/class from siblings
            if (k == "selected") {
                this.parent.navs
                    .filter( e => e.state.selected && e != this)
                    .forEach( e => {
                        e.DOM.classList.remove("selected");
                        e.state.selected = false;										
                    });
                if (this.state.selected) {
                    return;
                }
            }
            super.setState(k, v);
        }

        static toggleSelected (ev) {
            this.setState("selected", !this.state.selected);
        }
        
        render() {
            const nav = this.DOM;
            // i prefer onclick with for of and i don't need
            // removeEventListener for avoid memory leaks 
            if (this.targets.length > 0) {
                nav.onclick = e => {
                    for (const target of this.targets) {
                        const type = typeof target;
                        if (type == "string") {
                            location.href = target;
                        } else if (type == "function") {
                            target.call(this, e);
                        }
                    }                           
                };
            }

            nav.classList[this.state.selected ? 'add' : 'remove']("selected");
            nav.classList.add(...this.className);
            nav.textContent = this.text;
            return nav;
        }
    }

    // NavBar with Nav
    class NavBar extends Base {
    
        constructor(channel, list) {
            super(channel, 'div');
            this.navs = list.map(([text, cb]) => new Nav(channel, text, cb) )
            this.render();
            this.navs[0].DOM.click();
        }

        render() {
            const navBar = this.DOM;
            navBar.classList.add('navbar');
            return this.navs.reduce((obj, e) => {
                obj.appendChild(e.render());
            return obj;
            }, navBar);
        }
    }

    // Page Content
    class Content extends Base {
        constructor(channel) {
            super(channel, 'div');
            this.className = ['content'];
            this.render();
        }

        setContent(content) {
            this.DOM.innerHTML = typeof content == "string" ? content : "";
            if (typeof content == "object") {
                this.DOM.appendChild(content);
            }
        }

        static load(ctxObj, page) {
            const pages = {
                homepage: 'pages/homepage.txt'
            }
            return async function(e) {
                if (!pages[page]) { return; }
                const content = await Service.loadContent(pages[page]);
                ctxObj.setContent(content);
            }
        }
        
        render() {
            this.DOM.classList.add(...this.className);
            return this.DOM;
        }
    }

    class Orbit extends Base {
        constructor(channel, atom) {
            super(channel, 'div');
            this.atom = atom;
            this.ctx = atom.ctx;
            this.cX = this.ctx.canvas.width / 2;
            this.cY = this.ctx.canvas.height / 2;
            this.fullCircle = 2*Math.PI;
            this.speed = this.fullCircle/20;
            this.render(1);
        }               

        render(dt) {
            const step = this.speed * dt,
                radius = this.atom.radius;
            let theta = 0, x, y, nX, nY;
            this.ctx.beginPath();
            for(; theta < this.fullCircle; theta += step ) { 
                x = radius*(Math.cos(theta)*0.2);
                y = radius*(Math.sin(theta));    
                nX = x*Math.cos(this.rAngle)+y*Math.sin(this.rAngle);
                nY = -x*Math.sin(this.rAngle)+y*Math.cos(this.rAngle);
                this.ctx.lineTo(this.cX+nX,this.cY+nY);
            }
            this.ctx.closePath();    
            this.ctx.stroke();  
        } 
    }

    class Electron extends Base {
        constructor(channel, atom) {
            super(channel, 'div');
            this.atom = atom;
            this.ctx = atom.ctx;
            this.cX = this.ctx.canvas.width / 2;
            this.cY = this.ctx.canvas.height / 2;
            this.fullCircle = 2 * Math.PI;
            this.baseSpeed = this.fullCircle / 20;
            this.theta = Math.random() * this.fullCircle;
            this.size = 3;
            this.update(1);
        }               

        update(dt) {
            const radius = this.atom.radius;
            this.theta += this.baseSpeed * this.atom.speed * dt;
            (this.theta > this.fullCircle) && (this.theta = 0);
            const x = radius*(Math.cos(this.theta) * 0.2),
                y = radius*(Math.sin(this.theta));
            this.nX = this.cX+x*Math.cos(this.rAngle)+y*Math.sin(this.rAngle);
            this.nY = this.cY-x*Math.sin(this.rAngle)+y*Math.cos(this.rAngle);
            this.render();
        }

        render() {
            this.ctx.beginPath();
            this.ctx.arc(this.nX, this.nY, this.size, 0, this.fullCircle);
            this.ctx.fillStyle = 'blue';
            this.ctx.fill();
            this.ctx.shadowColor = '#aaf';
            this.ctx.shadowBlur = 5;
            this.ctx.shadowOffsetX = 0;
            this.ctx.shadowOffsetY = 0;                    
            this.ctx.closePath();    
            this.ctx.stroke();  
        } 
    }            

    class AtomController extends Base {
        constructor(channel, atom) {
            super();
            this.atom = atom;
            this.className = ['control'];
            this.init();
        }

        init() {
            this.DOM = this.createElement('div', this.className, [
                this.createElement('div', ['row'], [
                    this.createElement('div', ['button'], [this.createElement('div', ['pause'])],{
                        onclick: this.toggleAtom.bind(this)
                    }),
                    this.createElement('div', ['button'], [this.createElement('div', ['plus'])],{
                        onclick: this.atom.add.bind(this.atom)
                    }),
                    this.createElement('div', ['button'], [this.createElement('div', ['minus'])],{
                        onclick: this.atom.remove.bind(this.atom)
                    })
                ]),
                this.createElement('div', ['row'], [
                    this.createElement('input', null, null, {
                        name: "speed",
                        type: "range",
                        value: this.atom.speed,
                        min: "0",
                        max: "20",
                        step: "0.1",
                        onchange: this.changeSpeed.bind(this)
                    }),
                    this.createElement('input', null, null, {
                        name: "speed",
                        type: "range",
                        value: this.atom.radius,
                        min: "1",
                        max: "250",
                        step: "5",
                        onchange: this.changeRadius.bind(this)
                    }),                              
                ])
            ]);
            this.atom.playButton = this.DOM.firstChild.firstChild;
            this.render();  
        }

        toggleAtom(ev) {
            const state = this.atom.state.run,
                classes = ['play', 'pause'],
                e = ev.target.firstChild || ev.target;
            e.classList.remove(classes[+state]);
            this.atom.state.run = !state;
            e.classList.add(classes[+!state]);
            (!state) && (this.atom.run.call(this.atom));
         }

        changeSpeed(ev) {
            this.atom.speed = ev.target.value;
        }
        changeRadius(ev) {
            this.atom.radius = ev.target.value;
        }
        render() {
            this.atom.DOM.appendChild(this.DOM);  
        }
    }

    class Atom extends Base {
        constructor(channel) {
            super(channel, 'div');
            this.className = ['atom'];
            this.orbits = [];
            this.electrons = [];
            this.speed = 5;
            this.radius = 100;
            this.state = {
                run: false
            };
            this.lastTime = 0;
            this.init();
        }
        init() {
            const canvas = document.createElement('canvas'),
                initNr = 3;
            let i = 0;
            this.DOM.innerHTML = '';
            this.ctx = canvas.getContext('2d');
            canvas.width = 500;
            canvas.height = 500;
            this.controller = new AtomController(null, this);
            this.DOM.appendChild(canvas);
            this.DOM.classList.add(...this.className);
            for (; i < initNr; i++) {
                this.add();
            }
        }
        add() {
            this.orbits.push(new Orbit(this.channel, this));
            this.electrons.push(new Electron(this.channel, this));
            this.update();
        }
        remove() {
            this.orbits.pop();
            this.electrons.pop();
            this.update();
        }
        update() {
            const nr = this.orbits.length,
                part = 1 / nr;
            let rAng;
            let i = 0;
            for (; i<nr;i++) {
                rAng = Math.PI * part * i;
                this.orbits[i].rAngle = rAng;
                this.electrons[i].rAngle = rAng;
            }
        }
        run() {
            const now = Date.now(),
                dt = (now - this.lastTime) / 1000.0;
            this.lastTime = now;
            if (!this.DOM.parentElement || !this.state.run) {
                this.state.run = false;
                return;
            }
            this.render(dt);
            this.state.run && window.requestAnimationFrame(this.run.bind(this));
        }
        setState(k, v) {
            this.state[k] = v;
            this.render();
        }
        static start(ctxObj) {
            // lets make curry :)
            // here we have access to: ctxObj = atom, this = nav, ev = event
            return function(ev) {
                ctxObj.channel.Content.setContent(ctxObj.DOM);
                ctxObj.playButton.click();
                ctxObj.run.call(ctxObj);
            }
        }
        render(dt) {
            const {width,height} = this.ctx.canvas;
            this.ctx.clearRect(0,0,width,height);
            this.orbits.forEach(e => e.render(dt));
            this.electrons.forEach(e => e.update(dt));
        }
    }

    // Service for get data
    class Service {
        static loadContent(url) {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
            xhr.responseType = "text";
            xhr.send();   
            return new Promise((resolve, reject) => {
                xhr.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            resolve(this.responseText);
                        } else {
                            reject(`Unable to load: ${url}`);
                        }
                    }
                };       
            });
        }
    }

    class Root extends Base {
        constructor () {
            // object for horizontal data sharing
            const channel = {};		
            super(channel, 'div');
            // register components
            this.loadStyle("css/style.css");
            new NavBar(channel, [
                ["Home", [Nav.toggleSelected, Content.load(new Content(channel), "homepage")]],
                ["Atom", [Nav.toggleSelected, Atom.start(new Atom(channel))]]
            ]);
            this.render();
        }
        async loadStyle(url) {
            try {
                const el = document.createElement('style'),
                    style = await Service.loadContent(url);
                el.innerHTML = style;
                document.head.appendChild(el);
            } catch(err) {
                alert("Error: maybe you have problem with CORS? "+err)
            }
        }
        render() {
            this.DOM.appendChild(this.channel.NavBar.DOM);
            this.DOM.appendChild(this.channel.Content.DOM);
            document.body.appendChild(this.DOM);
        }
    }

    const root = new Root();
    // i attached the root object to window object only for debug 
    // else we cannot access it from console :)
    // global.root = root;
}