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
                    imgSrc: 'https://skin-tracker.com/images/icons/fnitemshop.png',
                    counter: 0,
                    tags: ['coin', 'medal', 'bitcoin'],
                    created: 1548400774123,
                    updated: 1548400774123
                },
                {
                    id: 'id_1548400574123',
                    title: 'Laptop #1',
                    imgSrc: 'http://www.oscarwinski.com/blog/wp-content/uploads/2013/04/macbook.png',
                    counter: 0,
                    tags: ['laptop', 'intel', 'portable computer'],
                    created: 1548400574123,
                    updated: 1548400574123
                },
                {
                    id: 'id_1548400504123',
                    title: 'Basketball',
                    imgSrc: 'https://pngimage.net/wp-content/uploads/2018/05/balon-de-basquetbol-png-3.png',
                    counter: 0,
                    tags: ['ball', 'basketball', 'sport'],
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


    // this is our object, the object properties accessable in html
    // so in html we can access clickCount (there don't need () but in object itself it is required)
    class Item {

        constructor(data, model) {
            console.log('[Item] (init) create ', data.title, data.id);
            // model, used only for save  to localStorage the current item state
            this.model = model;
            // data which was used to personalise our object
            // if we need to show anything from this object 
            // then we must assign to this object and create an observable like below
            this.data = data;
            // click counter which will be attached in html to img element
            this.id = ko.observable(data.id || 0);
            this.clickCount = ko.observable(data.counter || 0);
            this.title = ko.observable(data.title || 'Unknown');
            this.imgSrc = ko.observable(data.imgSrc || 'https://www.w3schools.com/w3images/fjords.jpg')
            this.created = ko.observable(data.created || +Date.now());
            this.updated = ko.observable(data.updated || +Date.now());
            this.imgSrc = ko.observable(data.imgSrc || 'https://www.w3schools.com/w3images/fjords.jpg')
            // tags - array and we will create from it an unordered array
            this.tags = ko.observableArray(data.tags || [])
            // we must keep context so we need bind the incrementCounter and delete function
            this.incrementCounter = this.incrementCounter.bind(this);
            this.delete = this.delete.bind(this);
            this.update = this.update.bind(this);
            this.showEdit = this.showEdit.bind(this);
            this.hideEdit = this.hideEdit.bind(this);
            // this is like observable except it will compute the returned data from other observable
            this.rank = ko.computed( () => {
                return this.getRank(this.clickCount());
            });
            this.visible = ko.observable(false);
        }
        
        incrementCounter() {
            console.log('[Item] incrementCounter', this.data.id);
            // we read out the counter value
            const counter = this.clickCount();
            // then we set the new value
            this.clickCount(counter + 1);
            // we save everything in model
            this.update();
        }

        getRank(qty = 0) {
            let rank;
            if (qty < 10) {
                rank = 'beginner';
            } else if (qty < 50) {
                rank = 'amateur';
            } else {
                rank = 'pro';
            }
            return rank;            
        }

        showEdit() {
            console.log('[Item] showEdit');
            this.visible(true);
        }

        hideEdit() {
            console.log('[Item] hideEdit');
            this.visible(false);
        }

        update() {
            console.log('[Item] update', this.data.id);
            // we merge old data with new one 
            // (because we have more properties like created, updated, id etc)
            this.model.update(Object.assign(this.data, {
                counter: this.clickCount(),
                imgSrc: this.imgSrc(),
                tags: this.tags(),
                title: this.title(),
            }))
            if (this.visible()) {
                this.hideEdit();
            }
        }

        delete() {
            console.log('[Item] delete', this.data.id);
            return this.model.delete(this.data.id);
        }
    }

    // this is temporary store for new item
    class AddItem {
        constructor(model) {
            console.log('[AddItem] init');
            // assign inputs to observables
            this.title = ko.observable('');
            this.imgSrc = ko.observable('');
            this.tags = ko.observable('');  
            this.model = model;
            // bind save to this context
            this.save = this.save.bind(this);          
        }

        reset() {
            this.title('');
            this.imgSrc('');
            this.tags('');              
        }

        save() {
            console.log('[AddItem] save', this.title());
            // set data from obsevables
            const data = {
                title: this.title(),
                imgSrc: this.imgSrc(),
                tags: this.title().split(',')
            }
            // reset field values
            this.reset();
            // return the save result because if save failed then we return false
            return this.model.add(data);
        }
    }


    // Note: observables are functions, so if you want get selectedItem then u need ()
    const ViewModel = function() {
        // init the model class (note: all data accesable with data property)
        const ItemModel = new Model();
        // init items based on data from model
        const ItemListArray = ItemModel.data.map(e => new Item(e, ItemModel));
        // create an object for controll the add new item part
        this.addItem = ko.observable(new AddItem(ItemModel));
        // create observableArray from previously created objects
        this.ItemList = ko.observableArray(ItemListArray);
        // create and set the currently selected item
        // so in html those data will be populated into item-info div
        this.selectedItem = ko.observable(ItemListArray[0]);
        // select current item from list, in event:
        //- the first param is the observable object where was the click
        //- second argument is the normal event object
        this.setItemHandler = (clickedItem) => {
            console.log('[ViewModel] setItemHandler');
            this.selectedItem(clickedItem);
        }
        
        // add button click will call this function
        this.addItemHandler = () => {
            console.log('[ViewModel] addItemHandler');
            // first we get and save the data
            const data = this.addItem().save();
            // if data was saved then
            if (data) {
                // add observable for the newest data
                this.ItemList.push(ko.observable(new Item(data, ItemModel)));
            }
        }

        // delete button click will call this function
        this.deleteItemHandler = () => {
            console.log('[ViewModel] deleteItemHandler');
            const id = this.selectedItem().data.id;
            console.log(id);
            if (this.selectedItem().delete()) {
               this.ItemList.remove( e => (typeof e === "function" ? e() : e).id() === id );
               this.selectedItem(this.ItemList()[0]);
            }
            this.selectedItem(this.ItemList()[0]);
        }
    }

    // we apply to DOM tree & init our ViewModel
    ko.applyBindings(new ViewModel());
};