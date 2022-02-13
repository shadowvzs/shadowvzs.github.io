const themes = {
    'light': {
        'body-bg-color': 'white',
        'header-bg-color': 'rgba(0,0,0,.12)',
        'footer-bg-color': 'rgba(0,0,0,.12)',
        'section-border-color': 'rgba(0,0,0,0.2)',
        'itemList-bg-color': 'rgba(0,0,0,0.02)',
        'itemList-border-color': 'rgba(0,0,0,0.1)',
        'primary-font-color': 'black',
        'item-list-bg-color': 'rgba(0,0,0,0.02)',
        'item-list-border-color': 'rgba(0,0,0,0.1)',
        'item-overlay-bg-color': 'rgba(255,255,255,.75)',
        'item-overlay-color': 'inherit',
        'item-img-bg-color': '#333',
        'item-img-border-color': '#333',
        'item-info-btn-bg-color': 'rgba(255,255,255, .8)',
        'item-info-btn-border-color': '#333',
        'item-info-btn-shadow': '0 0 3px 3px rgba(0,0,0,0.25)',
        'eq-info-bg-color': 'rgba(0,0,0,0.25)',
        'eq-info-border-color': 'rgba(0,0,0,0.5)',
        'tag-group-border-color': 'rgba(0,0,0,0.2)',
        'tag-item-bg-color': 'rgba(0,0,0,0.05)',
        'tag-item-border-color': 'rgba(0,0,0,0.2)',
        'tag-item-hove-bg-color': 'rgba(0,0,0,0.1)',
        'tag-item-active-bg-color': 'rgba(0,0,0,0.2)',
    },
    "dark": {
        'body-bg-color': 'black',
        'header-bg-color': 'rgba(255,255,255,.12)',
        'footer-bg-color': 'rgba(255,255,255,.12)',
        'section-border-color': 'rgba(255,255,255,0.2)',
        'itemList-bg-color': 'rgba(255,255,255,0.02)',
        'itemList-border-color': 'rgba(255,255,255,0.1)',
        'primary-font-color': 'white',
        'item-list-bg-color': 'transparent',
        'item-list-border-color': 'transparent',
        'item-overlay-bg-color': 'rgba(255,255,255,.75)',
        'item-overlay-color': 'black',
        'item-img-bg-color': '#333',
        'item-img-border-color': '#333',
        'item-info-btn-bg-color': 'rgba(0,0,0, .8)',
        'item-info-btn-border-color': '#333',
        'item-info-btn-shadow': '0 0 3px 3px rgba(255,255,255,0.25)',
        'eq-info-bg-color': 'rgba(255,255,255,0.25)',
        'eq-info-border-color': 'rgba(255,255,255,0.5)',
        'tag-group-border-color': 'rgba(255,255,255,0.2)',
        'tag-item-bg-color': 'rgba(255,255,255,0.25)',
        'tag-item-border-color': 'rgba(255,255,255,0.3)',
        'tag-item-hover-bg-color': 'rgba(255,255,255,0.15)',
        'tag-item-active-bg-color': 'rgba(255,255,255,0.45)',
    }
}

export function styleChanger(themeName = 'dark') {
    const theme = themes[themeName] || false;
    if (!theme) { return; }
    for (let key in theme) {
        document.documentElement.style.setProperty(`--${key}`, theme[key]);
    }
}