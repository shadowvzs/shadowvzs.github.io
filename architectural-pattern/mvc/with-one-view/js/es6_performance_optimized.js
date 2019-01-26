// we create a simple scope
{
    // we can reset the model content with localStorage.clear()
    // localStorage.clear('items');
    
    // model object work with our data
    class Model {
        constructor() {
            console.log('[model] init...');
            // if we dont have any data then we set few item
            const defaultData = [
                {
                    id: 'id_1548400774123',
                    title: 'Coins',
                    image: 'https://skin-tracker.com/images/icons/fnitemshop.png',
                    counter: 0,
                    created: 1548400774123,
                    updated: 1548400774123
                },
                {
                    id: 'id_1548400574123',
                    title: 'Laptop #1',
                    image: 'http://www.oscarwinski.com/blog/wp-content/uploads/2013/04/macbook.png',
                    counter: 0,
                    created: 1548400574123,
                    updated: 1548400574123
                },
                {
                    id: 'id_1548400504123',
                    title: 'Basketball',
                    image: 'https://pngimage.net/wp-content/uploads/2018/05/balon-de-basquetbol-png-3.png',
                    counter: 0,
                    created: 1548400504123,
                    updated: 1548400504123
                },                  
            ];
            this.data = this.load(defaultData);
        }

        add(obj) {
            console.log('[model] add item', obj);
            // set id, created time
            const timestamp = +Date.now();
            obj.id = `id_${timestamp}`;
            obj.created = timestamp;
            obj.updated = timestamp;
            // add the new item to the item array
            this.data.push(obj);
            // save the item array
            this.save();
            // return the new object
            return obj;
        }

        load(initData) {
            console.log('[model] load items');
            // load items array from localStorage
            try {
                return JSON.parse(localStorage.getItem('items')) || defaultData;
            } catch(err) {
                // let's return init/default list if nothing to load from browser localStorage
                console.log('[model] nothing to load or corrupt data!');
                return initData;
            }
        }

        save(data) {
            console.log('[model] save items');
            // save items array into localStorage
            const items = data || this.data;
            localStorage.setItem('items', JSON.stringify(items));
        }

        // update 1 item in array then save
        update(obj) {
            console.log('[model] update item', obj.id);
            // we get index for item which we want update
            const index = this.getIndex(obj.id);
            // we check if exist index or no
            if (index !== false) {
                obj.updated = +Date.now();
                this.data[index] = obj;
                this.save();
                // item exist and saved, we return true
                return obj;
            }
            // if item not exist then return false
            return false;
        }

        // delete item if we know the item id
        delete(id) {
            console.log('[model] delete item', id);
            const index = this.getIndex(id);
            if (index !== false) {
                // remeve item from array
                this.data.splice(index, 1);
                // save the arrayinto localStorage
                this.save();
                return true;
            }
            // we cannot delete it because id not found in items array
            return false;
        }

        // get index in array for id
        getIndex(id) {
            const index = this.data.findIndex( e => e.id === id);
            return index > -1 ? index : false;        
        }

        // get item by id from array
        getById(id) {
            const index = this.getIndex(id);
            return this.data[index] || false;        
        }        
    }

    class BaseView {
        
        // we assigned few event on container because we use event delegation
        // this method dispatch which handler must reponse to our event
        eventHandler(ev) {
            const target = ev.target,
                {event = null, id = null, handler = null} = target.dataset;

            if (!event) { 
                return; 
            } else if (ev.type !== event || !this[handler]) {
                return console.log('[view] Cannot dispatch this event type', target.dataset);
            }
            this[handler](ev, target, target.dataset)
        }

        // helper, for inline text content creation
        ct(text) {
            return document.createTextNode(text)
        }

        // helper, for inline element creation and set their properties
        ce(type, prop = null, data = null) {
            const elem = document.createElement(type);
            if (prop) {
                for (const key in prop) {
                    elem[key] = prop[key];
                }
            }
            if (data) {
                for (const key in data) {
                    elem.dataset[key] = data[key];
                }
            }            
            return elem;
        }

        // date time helper
        prettyDate(timestamp){
            const m = new Date(timestamp);
            return m.getUTCFullYear() + ". " +
                (m.getUTCMonth()+1).toString().padStart(2, '0') + ". " +
                m.getUTCDate().toString().padStart(2, '0') + " " +
                m.getUTCHours().toString().padStart(2, '0') + ":" +
                m.getUTCMinutes().toString().padStart(2, '0') + ":" +
                m.getUTCSeconds().toString().padStart(2, '0');
        }


        // it is a helper method to insert more than 1 element (array)
        appendChilds(parent, list) {
            if (!list.length) { return console.log('nothing to append'); }
            for (const elem of list) {
                parent.appendChild(elem);
            }
            return parent;
        }

    }

    class View extends BaseView {

        constructor(controller) {
            console.log('[view] init');
            super();
            // we declare object where we cache the child elements
            this.DOM = {
                childs: {}
            };
            // bind this context for eventHandler and addItem method
            this.eventHandler = this.eventHandler.bind(this);
            this.addItem = this.addItem.bind(this);
            // set object property from variable
            this.controller = controller;
            // create a simple div and cache it
            //this.container = document.createElement('div');
            // append dom element list into another dom element
            this.container = this.appendChilds(this.ce('div', {className: 'myList'}), [
                this.titleInput = this.ce('input', {placeholder: 'Title'}),
                this.urlInput = this.ce('input', {placeholder: 'Image url'}),
                this.addButton = this.ce('button', {textContent: 'Add', 'onclick': this.addItem}),
                this.listContainer = this.ce('ul'),  
            ]);
            this.listContainer.onclick = this.eventHandler;
            // insert container into body element
            document.body.appendChild(this.container);
            // render because maybe we have data
            this.render();
        }

        // add a new item
        addItem(e) {
            // get trimmed title and url
            const title = this.titleInput.value.trim();
            const url = this.urlInput.value.trim();
            // if atitle or url is empty then we do nothing
            if (!title.length || !url.length) { 
                return console.log('[view] Error: title and url cannot be empty string!'); 
            }
            // we call controller for add new item
            const data = this.controller.addList(title, url);
            data && this.listContainer.appendChild(this.createListItem(data));
            // reset the input value
            this.titleInput.value = '';
            this.urlInput.value = '';
        }
        
        // increase click by 1 when click to image
        incrementEvent(ev, target, data) {
            this.controller.increaseCounter(data.id);
        }

        // delete item if you clicked to remove button
        deleteItem(ev, target, data) {
            const id = data.id;
            if (this.controller.removeItem(id)) {
                this.DOM.childs[id].DOM.remove();
                delete this.DOM.childs[id];
            } 
        }
        
        // create a single list item
        createListItem(data) {
            console.log('[view] create list item', data.id);
            const childs = this.DOM.childs,
                createdTime = this.prettyDate(data.created),
                updatedTime = this.prettyDate(data.updated);
            let header, image, counter, title, delButton, updated;

            // insert the elements into header element
            header = this.appendChilds(document.createElement('span'), [
                this.ct('id: '),
                this.ce('span', {textContent: data.id}),
                this.ct(', click counter('),
                counter = this.ce('span', {textContent: data.counter}),
                this.ct('), created: '),
                this.ce('span', {textContent: createdTime}),
                this.ct(', updated: '),
                updated = this.ce('span', {textContent: updatedTime})
            ]);

            const commonData = {id: data.id, event: 'click'};
            // insert the main elements into item element
            const item = this.appendChilds(this.ce('li', {className: 'item'}), [
                header, 
                title = this.ce('h2', {textContent: data.title}), 
                image = this.ce('img', {src: data.image}, {...commonData, handler: 'incrementEvent'}), 
                delButton = this.ce('button', {textContent: 'remove'}, {...commonData, handler: 'deleteItem'})
            ]);

            // cache elements for update
            childs[data.id] = {
                counter,
                title,
                image,
                updated,
                DOM: item
            };


            return item;
        }

        update(newData, oldData) {
            console.log('[view] update', newData.id);
            let keys = [];
            // if oldData was same item than newData (same item.id)
            // then update only the differences
            if (newData.id === oldData.id) {
                for (const key in newData) {
                    if (newData[key] !== oldData[key]) {
                        keys.push(key);
                    }
                }
            // else update every dom element for this item
            } else {
                keys = Object.keys(newData);
            }

            if (keys.length) {
                const itemDOM = this.DOM.childs[newData.id];
                keys.forEach( e => {
                    let value = newData[e];
                    if (e === 'created' || e === 'updated') {
                        value = this.prettyDate(newData[e]);
                    }
                    itemDOM[e].textContent = value;
                });
                return console.log(`[controller] update these elements [${newData.id}]: `, keys);
            } else {
                return console.log('[controller] nothing to update');
            }
        }

        render() {
            console.log('[view] render');
            // get list from controller (and controller get from model)
            const list = this.controller.getList();
            // clear list container
            this.listContainer.innerHTML = '';
            // if we have something in list then add items into list container
            if (list.length) {
                this.appendChilds(this.listContainer, list.map( item => this.createListItem(item)));
            }
        }       
    }


    class Controller {

        constructor(Model, View) {
            console.log('[controller] init');
            // init and assign the model to controller
            this.Model = new Model();
            // inject controller into view, so we don't need to know the controller name
            this.View = new View(this);
        }
        
        getList() {
            console.log('[controller] get item list');
            return this.Model.data;
        }

        addList(title, image) {
            console.log('[controller] add item', title, image);
            // we put title, url into object and pass to model
            return this.Model.add({title, image, counter: 0});
        }
        
        removeItem(id) {
            console.log('[controller] delete item', id);
            const response = this.Model.delete(id);
            // item will be deleted if response isn't false but that is in view
            return response;
        }
        
        updateItem(data, oldData = null) {
            console.log('[controller] update item', data.id);
            // update data in model
            const response = this.Model.update(data);
            // update DOM, but only which needed
            this.View.update(response, oldData); 
            return response;
        }
        
        increaseCounter(id) {
            console.log('[controller] increase counter', id);
            // increase the item property (counter) by 1
            // we update the item in array, save, render view again
            const data = this.Model.getById(id);
            if (!data) {
                return console.log('[controller] data not exist', id);
            }
            // clone object(since primitive data, shallow clone is enough)
            const oldData = {...data};
            data.counter++;
            // keep track the old and new data too
            this.updateItem(data, oldData);     
        }
    }

// start our application
const myController = new Controller(Model, View);

};