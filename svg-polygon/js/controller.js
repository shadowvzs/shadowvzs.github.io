((global) => {
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const megyeTitle = document.querySelector('ins');
    const imageData = {
        url: './assets/img/hu.png',
        width: 1872,
        height: 1172
    };

    const megyeList = [...megye];

    nav.onclick = (e) => {
        const type = e.target.dataset.type;
        if (type && render[type]) {
            main.innerHTML = '';
            render[type]();
        }
    }

    const createElement = (tag, props = {}, children = [], mountPoint = null) => {
        let elem;
        if (['svg', 'polygon'].indexOf(tag) < 0) {
            elem = document.createElement(tag);
        } else {
            elem = document.createElementNS('http://www.w3.org/2000/svg', tag);
        }

        Object.keys(props).forEach(key => {
            if (key.substr(0, 2) === 'on') {
                elem[key] = props[key];
            } else {
                elem.setAttribute(key, props[key])
            }
        });
        children.forEach(c => elem.appendChild(createElement(...c)));
        if (mountPoint) { mountPoint.appendChild(elem); };
        return elem;
    };

    const renderMap = () => {
        megyeList.sort((a, b) => ('' + a.id).localeCompare(b.id));

        const megyeListVElems = megyeList.map(m => [
            'area', {
                title: m.name,
                coords: m.coords.split(' ').join(','),
                shape: 'poly',
                target: '_blank',
                href: '#' + m.id
            }
        ]);
        const vElem = ['div', { id: 'root' }, [
            ['img', { src: imageData.url, usemap: '#image-map' }],
            ['map', { name: 'image-map', onmouseover: onMouseOver }, megyeListVElems],
        ]];
        createElement(...vElem, main);
    };

    const renderSvg = () => {
        megyeList.sort((a, b) => ('' + b.id).localeCompare(a.id));
        const megyeListVElems = megyeList.map(m => [
            'polygon', {
                title: m.name,
                class: 'megye',
                points: m.coords,
            }
        ]);
        const vElem = ['svg', {
            id: 'svgMap',
            viewBox: '0 0 1872 1172',
            style: 'background-image: url("'+imageData.url+'"); background-size: contain;',
            onmouseover: onMouseOver
        }, megyeListVElems];
        createElement(...vElem, main);
    };

    const onMouseOver = (event) => {
        const title = event.target.getAttribute('title');
        if (!title) return;
        megyeTitle.textContent = title;
        event.preventDefault();
        event.stopPropagation();
    }

    const render = {
        map: renderMap,
        svg: renderSvg
    };
})(window);
