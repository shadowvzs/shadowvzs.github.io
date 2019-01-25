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
                },
                {
                    id: 'id_1548400574123',
                    title: 'Laptop #1',
                    image: 'http://www.oscarwinski.com/blog/wp-content/uploads/2013/04/macbook.png',
                    counter: 0,
                    created: 1548400574123,
                },
                {
                    id: 'id_1548400504123',
                    title: 'Basketball',
                    image: 'https://pngimage.net/wp-content/uploads/2018/05/balon-de-basquetbol-png-3.png',
                    counter: 0,
                    created: 1548400504123,
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
            console.log('[model] update item', obj);
            // we get index for item which we want update
            const index = this.getIndex(obj.id);
            // we check if exist index or no
            if (index) {
                this.data[index] = obj;
                this.save();
                // item exist and saved, we return true
                return true;
            }
            // if item not exist then return false
            return false;
        }

        // delete item if we know the item id
        delete(id) {
            console.log('[model] delete item', id);
            const index = this.getIndex(id);
            if (index !== false) {
                this.data.splice(index, 1);
                this.save();
                return true;
            }
            // we cannot delete it because id not found in items array
            return false;
        }

        // get index in array for id
        getIndex(id) {
            const index = this.data.findIndex( e => e.id === id)
            return index > -1 ? index : false;        
        }
    }


    class View {

        constructor(controller) {
            console.log('[view] init');
            this.controller = controller;
            // create a simple div and cache it
            this.container = document.createElement('div');
            // append dom element list into another dom element
            this.appendChilds(this.container, [
                this.titleInput = document.createElement('input'),
                this.urlInput = document.createElement('input'),
                this.addButton = document.createElement('button'),
                this.listContainer = document.createElement('ul'),  
            ]);
            // set addButton label and onclick event
            this.addButton.textContent = "add";
            // set placeholder
            this.titleInput.placeholder = 'Title';
            this.urlInput.placeholder = 'image url';
            // we set click event to add button
            this.addButton.onclick = e => {
                // get trimmed title and url
                const title = this.titleInput.value.trim();
                const url = this.urlInput.value.trim();
                // if atitle or url is empty then we do nothing
                if (!title.length || !url.length) { return console.log('[view] Error: title and url cannot be empty string!'); }
                // we call controller for add new item
                controller.addList(title, url); 
                // reset the input value
                this.titleInput.value = '';
                this.urlInput.value = '';
            };
            // set class name for our container
            this.container.className = "myList";
            // insert container into body element
            document.body.appendChild(this.container);
            // render because maybe we have data
            this.render();
        }
        
        // insert a list of dom elements into another dom element
        appendChilds(parent, list) {
            if (!list.length) { return console.log('nothing to append'); }
            for (const elem of list) {
                parent.appendChild(elem);
            }
        }
        
        // create a single list item
        createListItem(data) {
            console.log('[view] create list item', data);
            // create a div and store in item variable
            const item = document.createElement('li');
            item.className = 'item';
            // get date from timestamp (milisec since 1970)
            const created = (new Date(data.created)).toString();
            // create a span and store in header variable, 
            const header =  document.createElement('span');
            header.textContent = `id: ${data.id}, click counter(${data.counter}), time: ${created}`;
            // create image and load image url from item data
            const img = document.createElement('img');
            img.src = data.image;
            // add clicker event to image which will increase the counter by 1
            img.onclick = e => this.controller.increaseCounter(data);
            // create a new div where we will write the title
            const title = document.createElement('h2');
            // set the item title to title element
            title.textContent = data.title;
            // create delete button and set label
            const delButton =  document.createElement('button');
            delButton.textContent = 'remove';
            // add event for delete button
            delButton.onclick = e => this.controller.removeItem(data.id);   
            // insert all item what we created into this item container
            this.appendChilds(item, [header, title, img, delButton]);
            return item;
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
            this.Model = new Model();
            this.View = new View(this);
        }
        
        getList() {
            console.log('[controller] get item list');
            return this.Model.data;
        }

        addList(title, image) {
            console.log('[controller] add item', title, image);
            // we put title, url into object and pass to model
            const response = this.Model.add({title, image, counter: 0});
            // we must render the view to reflect the changes
            this.View.render();
            return response;
        }
        
        removeItem(id) {
            console.log('[controller] delete item', id);
            const response = this.Model.delete(id);
            // we must render the view to reflect the changes
            this.View.render();
            return response;
        }
        
        updateItem(data) {
            console.log('[controller] update item', data);
            const response = this.Model.update(data);
            // we must render the view to reflect the changes
            this.View.render(); 
            return response;
        }
        
        increaseCounter(data) {
            // increase the item property (counter) by 1
            // we update the item in array, save, render view again
            data.counter++ && (this.updateItem(data));          
        }
    }

// start our application
const myController = new Controller(Model, View);

};