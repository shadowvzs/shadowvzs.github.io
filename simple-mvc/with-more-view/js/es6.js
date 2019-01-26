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
        
        constructor(controller) {
            // bind event handler to current object
            this.eventHandler = this.eventHandler.bind(this);
            // set object property from variable
            this.controller = controller;
        }

        // we assigned few event on containers because we use event delegation
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

        // date time helper YYYY. MM. DD. HH:MM:SS format
        prettyDate(timestamp) {
            const m = new Date(+timestamp);
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


    // this is the add new item part of the view
    class AddItemView extends BaseView {

        constructor(controller) {
            console.log('[view - AddItem] init');
            super(controller);
            // we declare object where we cache the child elements
            this.DOM = {
                childs: {}
            };
            // bind this context for addItem method
            this.addItem = this.addItem.bind(this);
            // insert dom element list into container (div) dom element
            this.container = this.appendChilds(this.ce('div', {className: 'item-add'}), [
                this.titleInput = this.ce('input', {placeholder: 'Title'}),
                this.urlInput = this.ce('input', {placeholder: 'Image url'}),
                this.addButton = this.ce('button', {textContent: 'Add', 'onclick': this.addItem})
            ]);
            // insert into body
            this.render();
        }

        // add a new item
        addItem(e) {
            console.log('[view - AddItem] addItem');
            // get trimmed title and url
            const title = this.titleInput.value.trim();
            const url = this.urlInput.value.trim();
            // if atitle or url is empty then we do nothing
            if (!title.length || !url.length) { 
                return console.log('[view] Error: title and url cannot be empty string!'); 
            }
            // we call controller for add new item
            this.controller.addItem(title, url);
            // reset the input value
            this.titleInput.value = '';
            this.urlInput.value = '';
        }

        render() {
            console.log('[view - AddItem] render');
            // insert container into body element
            document.getElementById('root').appendChild(this.container);
        }
    }

    // the item list part where user can select the current item from list
    class ItemListView extends BaseView {

        constructor(controller) {
            console.log('[view - ItemList] init');
            super(controller);
            // currently selected item
            this.selectedItem = null;
            // li elenments from the item array
            this.childs = {};
            this.container = this.ce('ul', {className: 'item-list', onclick: this.eventHandler})
            this.render();
        }

        addItem(item) {
            console.log('[view - ItemList] addItem');
            this.container.appendChild(this.createItem(item));
        }

        removeItem(id) {
            console.log('[view - ItemList] removeItem');
            // if deleted item is the currently selected item then we must select something else
            if (this.selectedItem && this.selectedItem.dataset.id === id) {
                const alt = Object.values(this.childs).find(e => e.dataset.id != id);
                alt && this.selectItem(alt.dataset.id);
            }
            this.childs[id].remove();
        }

        selectItemEvent(ev, target, data) {
            console.log('[view - ItemList] selectItemEvent');
            if (target === this.selectedItem || !data.id) { return; }
            this.selectItem(data.id);
        }

        selectItem(id) {
            console.log('[view - ItemList] selectItem');
            const result = this.controller.selectItem(id);
            if (!result) { return console.log('[view - ItemList] item not found'); }
             // remove class from old item
            this.selectedItem && this.selectedItem.classList.remove('active');
            // changed the selectedItem to newly selected item
            this.selectedItem = this.childs[id];
            // add class for new selected item
            this.selectedItem.classList.add('active');
        }

        createItem(item) {
            console.log('[view - ItemList] createItem');
            // create a li DOM node with properties
            return this.childs[item.id] = this.ce('li', {textContent: item.title}, {
                id: item.id,
                event: 'click',
                handler: 'selectItemEvent'
            });
        }

        render() {
            console.log('[view - ItemList] render');
            // get list from controller (and controller get from model)
            const list = this.controller.getList();
            // if we have something in list then add items into list container
            if (list.length) {
                this.appendChilds(this.container, list.map( item => this.createItem(item)));
            }
            // insert container into body element
            document.getElementById('root').appendChild(this.container);
        }       
    }

    // display the information from selected item
    class ItemInfoView extends BaseView {

        constructor(controller) {
            console.log('[view - ItemInfo] init');
            super(controller);
            this.selectedItem = null;
            this.incrementEvent = this.incrementEvent.bind(this);
            this.editItem = this.editItem.bind(this);
            this.removeItem = this.removeItem.bind(this);
            this.childs = {};
            this.item = null;
            this.createUI();
        }

        createUI() {
            console.log('[view - ItemInfo] createUI');
            // this.container = this.appendChilds(this.ce('div', {className: 'item-info'}), [
            const header = this.appendChilds(this.ce('div', {className: 'item-header'}), [
                this.ct('id: '),
                this.childs.id = this.ce('span', {className: 'item-id'}),
                this.ct(', click counter('),
                this.childs.counter = this.ce('span', {className: 'item-counter'}),
                this.ct('), created: '),
                this.childs.created = this.ce('span', {className: 'item-created'}),
                this.ct(', updated: '),
                this.childs.updated = this.ce('span', {className: 'item-updated'})
            ]);

            this.container = this.appendChilds(this.ce('div', {className: 'item-info'}), [
                header, 
                this.childs.title = this.ce('h2', {textContent: 'Loading...'}), 
                this.childs.image = this.ce('img', {src: '', onclick: this.incrementEvent}), 
                this.appendChilds(this.ce('div'), [
                    this.ce('button', {textContent: 'Edit', onclick: this.editItem}),
                    this.ce('button', {textContent: 'Remove', onclick: this.removeItem})
                ])
            ]);

            this.render();
        }

        // increase click by 1 when click to image
        incrementEvent() {
            console.log('[view - ItemInfo] incrementEvent');
            this.controller.increaseCounter(this.item.id);
        }

        // edit item if you clicked to remove button
        editItem() {
            console.log('[view - ItemInfo] editItem');
            this.controller.setEditItem(this.item);
        }

        // delete item if you clicked to remove button
        removeItem() {
            console.log('[view - ItemInfo] deleteItem');
            const id = this.item.id;
            this.controller.removeItem(id); 
        }

        setItem(newData) {
            console.log('[view - ItemInfo] setItem', newData.id);
            const oldData = this.item;
            let keys = [];
            // if oldData was same item than newData (same item.id)
            // then update only the differences
            if (oldData && newData.id === oldData.id) {
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
                keys.forEach( e => {
                    if (!this.childs[e]) { return; }
                    let value = newData[e];
                    if (e === 'image') {
                        this.childs[e].src = value;
                    }
                    if (e === 'created' || e === 'updated') {
                        value = this.prettyDate(newData[e]);
                    }
                    this.childs[e].textContent = value;
                });
                this.item = {...newData};
                return console.log(`[view - ItemInfo] update these elements [${newData.id}]: `, keys);
            } else {
                return console.log('[view - ItemInfo] nothing to update');
            }
        }

        render() {
            console.log('[view - ItemInfo] render');
            document.getElementById('root').appendChild(this.container);
        }       
    }

    class ItemEditView extends BaseView {

        constructor(controller) {
            console.log('[view - ItemEditView] init');
            super(controller);
            this.saveItem = this.saveItem.bind(this);
            this.showUI = this.showUI.bind(this);
            this.hideUI = this.hideUI.bind(this);
            this.status = false;
            // elements cwhich need to update
            this.childs = {};
            // selected item
            this.item = null;
            this.createUI();
        }

        createUI() {
            console.log('[view - ItemEditView] createUI');
            this.container = this.appendChilds(this.ce('div', {className: 'item-edit hide'}), [
                this.childs.id = this.ce('h2'),
                this.childs.counter = this.ce('input', {name: 'counter'}),
                this.childs.title = this.ce('input', {name: 'title'}), 
                this.childs.image = this.ce('input', {name: 'image'}), 
                this.childs.created = this.ce('input', {name: 'created'}),
                this.childs.updated = this.ce('input', {name: 'updated'}),
                this.ce('button', {textContent: 'Save', onclick: this.saveItem}),
                this.ce('button', {textContent: 'Cancel', onclick: this.hideUI}),
            ]);

            this.render();
        }

        hideUI() {
            console.log('[view - ItemEditView] hideUI');
            this.status = false;
            this.container.classList.add('hide');
        }

        showUI() {
            console.log('[view - ItemEditView] showUI');
            this.status = true;
            this.container.classList.remove('hide');
        }

        // edit item if you clicked to remove button
        saveItem() {
            console.log('[view - ItemEditView] saveItem');
            Object.values(this.childs).forEach(e => {
                if (e.tagName === 'INPUT') {
                    this.item[e.name] = e.value;
                }
            });
            console.log(this.item)
            if (this.controller.updateItem(this.item)) {
                this.hideUI();
            } else {
                alert('Cannot update this item!');
            }
        }

        setItem(newData) {
            console.log('[view - ItemEditView] setItem', newData.id);
            const oldData = this.item;
            let keys = [];
            // if oldData was same item than newData (same item.id)
            // then update only the differences
            if (oldData && newData.id === oldData.id) {
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
                keys.forEach( e => {
                    if (!this.childs[e]) { return; }
                    const method = e === 'id' ? 'textContent' : 'value';
                    this.childs[e][method] = newData[e];
                });
                this.item = {...newData};
                return console.log(`[view - ItemInfo] update these elements [${newData.id}]: `, keys);
            } else {
                return console.log('[view - ItemInfo] nothing to update');
            }

            !this.status && this.showUI();
        }

        render() {
            console.log('[view - ItemEditView] render');
            document.getElementById('root').appendChild(this.container);
        }       
    }        

    class Controller {

        constructor(Model, views) {
            console.log('[controller] init');
            // init and assign the model to controller
            this.Model = new Model();
            this.View = {};
            // inject controller into view, so we don't need to know the controller name
            for (const view in views) {
                this.View[view] = new views[view](this);
            }
            if (this.Model.data.length) {
               this.View.ItemListView.selectItem(this.Model.data[0].id);
            }
        }
        
        getList() {
            console.log('[controller] getList');
            return this.Model.data;
        }

        getById(id) {
            console.log('[controller] getById', id);
            return this.Model.getById(id);
        }

        selectItem(id) {
            console.log('[controller] selectItem', id);
            const item = this.getById(id);
            if (!item) { return false; }
            this.View.ItemInfoView.setItem(item);
            this.View.ItemEditView.hideUI();
            return true;
        }

        setEditItem(item) {
            console.log('[controller] setEditItem', item.id);
            this.View.ItemEditView.setItem(item);
            this.View.ItemEditView.showUI();
        }

        addItem(title, image) {
            console.log('[controller] add item', title, image);
            // we put title, url into object and pass to model
            const result = this.Model.add({title, image, counter: 0});
            if (result) {
                this.View.ItemListView.addItem(result);
            }
        }
        
        removeItem(id) {
            console.log('[controller] delete item', id);
            const response = this.Model.delete(id);
            if (response) {
                this.View.ItemListView.removeItem(id);
            }
            // item will be deleted if response isn't false but that is in view
            return response;
        }
        
        updateItem(data, oldData = null) {
            console.log('[controller] update item', data.id);
            // update data in model
            const response = this.Model.update(data);
            // update DOM, but only which needed
            this.View.ItemInfoView.setItem(response, oldData); 
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
const myController = new Controller(Model, { AddItemView, ItemListView, ItemInfoView, ItemEditView });

};