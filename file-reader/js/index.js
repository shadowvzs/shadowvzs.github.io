class Benchmark {

    constructor(container) {
        this.container = document.querySelector(container);

        // create input
        const fileInput = this.ce('input', {
            type: 'file', 
            onchange: this.onChangeHandler.bind(this),
            accept: 'image/*',
            multiple: true
        });

        // create input
        const options = [[3, 'Test Both'], [1, 'FileReaderApi'], [2, 'createObjectUrl']];
        const selectMethod = this.ce('select', {
            innerHTML: options.map( ([v, t]) => `<option value="${v}">${t}</option>`).join(''), 
            onchange: ev => this.method = ev.target.value
        });

        this.method = options[0][0];

        // create result box
        const results = this.ce('div', { 
            className: 'results',
            textContent: 'Upload images'
        });

        // create dropzone
        const dropZone = this.ce('div', { 
            onclick: () => fileInput.click(),
            className: 'dropzone',
            title: 'Upload images with drag & drop or click to yellow area',
            ondragover: ev => ev.preventDefault(),
            ondragenter: ev => ev.target.classList.add('active'),
            ondragleave: ev => ev.target.classList.remove('active'),
            ondrop: this.onDrop.bind(this)
        });

        // assign to this object
        this.results = results;
        this.dropZone = dropZone;

        // insert everything into DOM (first into fragment, then fragment into container)
        const nodeArray = [fileInput, selectMethod, results, dropZone]
        this.addChilds(this.container, nodeArray);
    }

    // helper for create element inline
    ce(tag, props = false) {
        const elem = document.createElement(tag);
        if (props) {
            for (const key in props) {
                elem[key] = props[key];
            }
        }
        return elem;
    }

    // add more child into the DOM
    addChilds(container, nodeArray) {
        const fragment = document.createDocumentFragment();
        for (const node of nodeArray) {
            fragment.appendChild(node);
        }
        container.appendChild(fragment);
    }

    // if we drop then we call same function than if we click to drop zone 
    // and select manually the files
    onDrop(ev) {
        ev.preventDefault();
        ev.target.classList.remove('active')
        const files = ev.dataTransfer.files;
        this.results.textContent = files.length + ' file(s)';
        this.loadFiles(files);
    }           

    // if we select files with "open file window"
    onChangeHandler(ev) {
        const files = ev.target.files; // or fileInput.files
        this.loadFiles(files);
    }

    // this load the file loader/reader methods and amke few settings
    loadFiles(files) {
        files = Array.from(files).filter( file => file.type.match(/image.*/) );
        if (!files.length) { return; }
        const size = ~~(files.reduce((total, file) => total + file.size, 0) / 1024);
        this.dropZone.innerHTML = '';
        this.results.innerHTML = `Testing started...<br /> Total Size: ${size} kb...<br/>`;
        // binary conditions, check the binary 1 position in method
        (this.method & 1) && this.fileReaderTest(files);
        // binary conditions, check the binary 1 position in method
        (this.method & 2) && this.createObjectUrl(files);
    }

    // fileReaderApi
    fileReaderTest(files) {

        const test = {
            start: performance.now(),
            max: files.length,
            current: 0,
            end: 0
        }

        const fragment = document.createDocumentFragment();

        for (const file of files) {
            let reader = new FileReader();
            reader.onloadend = e => {
                const img = this.ce('img', { src: e.target.result });
                fragment.appendChild(img);
                test.current++;
                if (test.current === test.max) {
                    test.end = performance.now();
                    const duration = (test.end - test.start) / 1000;
                     this.results.innerHTML += `<div>FileReader: ${duration} sec</div>`;
                    this.dropZone.appendChild(fragment);
                }
                // free up the memory
                reader = null;
            }

            // reader.readAsBinaryString(file); is faster but data is in binary format
            reader.readAsDataURL(file);               
        }
    }

    // createObjectUrl
    createObjectUrl(files) {

        const test = {
            start: performance.now(),
            max: files.length,
            current: 0,
            end: 0
        };

        const fragment = document.createDocumentFragment();

        for (const file of files) {
            const url = URL.createObjectURL(file);
            const img = this.ce('img', { 
                src: url,
                onload: () => {
                    URL.revokeObjectURL(url);
                    fragment.appendChild(img);
                    test.current++;
                    if (test.current === test.max) {
                        test.end = performance.now();
                        const duration = (test.end - test.start) / 1000;
                        this.results.innerHTML += `<div>createObjectUrl: ${duration} sec</div>`;
                        this.dropZone.appendChild(fragment);
                    }                             
                }
            });
        }
    }
}

const Test = new Benchmark("#root");
