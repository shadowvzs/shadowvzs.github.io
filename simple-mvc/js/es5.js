// we declare a iife function (after function declaration it will be executed instantly)
(function() {

    // we can reset the model content with localStorage.clear()
    // localStorage.clear('items');
    
    // model object work with our data
    var model = {

            init: function() {
                console.log('[model] init...');
                // if we dont have any data then we set few item
                var defaultData = [
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
            },

            add: function(obj) {
                console.log('[model] add item', obj);
                // set id, created time
                var timestamp = Date.now();
                obj.id = 'id_' + timestamp;
                obj.created = timestamp;
                // add the new item to the item array
                this.data.push(obj);
                // save the item array
                this.save();
                // return the new object
                return obj;
            },

            load: function(initData) {
                console.log('[model] load items');
                // load items array from localStorage
                try {
                    return JSON.parse(localStorage.getItem('items')) || defaultData;
                } catch(err) {
                    // let's return init/default list if nothing to load from browser localStorage
                    console.log('[model] nothing to load or corrupt data!');
                    return initData;
                }
            },

            save: function(data) {
                console.log('[model] save items');
                // save items array into localStorage
                var items = data || this.data;
                localStorage.setItem('items', JSON.stringify(items));
            },

            // update 1 item in array then save
            update: function(obj) {
                console.log('[model] update item', obj);
                // we get index for item which we want update
                var index = this.getIndex(obj.id);
                // we check if exist index or no
                if (index) {
                    this.data[index] = obj;
                    this.save();
                    // item exist and saved, we return true
                    return true;
                }
                // if item not exist then return false
                return false;
            },

            // delete item if we know the item id
            delete: function(id) {
                console.log('[model] delete item', id);
                var index = this.getIndex(id);
                if (index !== false) {
                    this.data.splice(index, 1);
                    this.save();
                    return true;
                }
                // we cannot delete it because id not found in items array
                return false;
            },

            // get index in array for id
            getIndex: function(id) {
                console.log('[model] search for index', id);
                var items = this.data;
                var length = items.length;
                var i;
                for (i = 0; i < length; i++) {
                     if (items[i].id === id) {
                         return i;
                    }
                }
                return false;        
            },

    };


    // the glue between model and view
    var controller = {
        
        init: function() {
            console.log('[controller] init');
            model.init();
            view.init();               
        },
        
        getList: function() {
            console.log('[controller] get item list');
            return model.data;
        },

        addList: function(title, url) {
            console.log('[controller] add item', title, url);
            // we put title, url into object and pass to model
            var response = model.add({title: title, image: url, counter: 0});
            // we must render the view to reflect the changes
            view.render();
            return response;
        },
        
        removeItem: function(id) {
            console.log('[controller] delete item', id);
            var response = model.delete(id);
            // we must render the view to reflect the changes
            view.render();
            return response;
        },  
        
        updateItem: function(data) {
            console.log('[controller] update item', data);
            var response = model.update(data);
            // we must render the view to reflect the changes
            view.render();
            return response;
        },      
        
        increaseCounter: function(data) {
            // increase the item property (counter) by 1
            data.counter++;
            // we update the item in array, save, render view again
            this.updateItem(data);          
        }
        
    }

    var view = {
        
        init: function() {
            console.log('[view] init');
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
            // we need store context (this) because in below function 
            // this will refer to dom element, not to this view object
            var self = this;
            // we set click event to add button
            this.addButton.onclick = function(e) {
                // get trimmed title and url
                var title = self.titleInput.value.trim();
                var url = self.urlInput.value.trim();
                // if atitle or url is empty then we do nothing
                if (!title.length || !url.length) { return console.log('[view] Error: title and url cannot be empty string!'); }
                // we call controller for add new item
                controller.addList(title, url); 
                // reset the input value
                self.titleInput.value = '';
                self.urlInput.value = '';
            };
            // set class name for our container
            this.container.className = "myList";
            // insert container into body element
            document.body.appendChild(this.container);
            // render because maybe we have data
            this.render();
        },
        
        // insert a list of dom elements into another dom element
        appendChilds(parent, list) {
            var length = list.length;
            if (!length) { return console.log('nothing to append'); }
            var i;
            for (i = 0; i < length; i++) {
                parent.appendChild(list[i]);
            }
        },
        
        // create a single list item
        createListItem(data) {
            console.log('[view] create list item', data);
            // create a div and store in item variable
            var item = document.createElement('li');
            item.className = 'item';
            // get date from timestamp (milisec since 1970)
            var created = (new Date(data.created)).toString();
            // create a span and store in header var, 
            var header =  document.createElement('span');
            header.textContent = 'id: '+data.id + ', click counter('+data.counter+'), time: '+created;
            // create image and load image url from item data
            var img =  document.createElement('img');
            img.src = data.image;
            // add clicker event to image which will increase the counter by 1
            img.onclick = function(e) {
                controller.increaseCounter(data);   
            }
            // create a new div where we will write the title
            var title = document.createElement('h2');
            // set the item title to title element
            title.textContent = data.title;
            // create delete button and set label
            var delButton =  document.createElement('button');
            delButton.textContent = 'remove';
            // add event for delete button
            delButton.onclick = function(e) {
                controller.removeItem(data.id); 
            }
            // insert all item what we created into this item container
            this.appendChilds(item, [header, title, img, delButton]);
            return item;
        },
        
        render: function() {
            console.log('[view] render');
            // get list from controller (and controller get from model)
            var list = controller.getList();
            // clear list container
            this.listContainer.innerHTML = '';
            // if we have something in list then add items into list container
            if (list.length) {
                // we need set the context because in below function this not same than here
                var self = this;
                
                var listItems = list.map(function(item) {
                    return self.createListItem(item);
                });     
                // insert every item container into item list container
                this.appendChilds(this.listContainer, listItems);   
            }
        },
        
    }

// start our application
controller.init();

})();