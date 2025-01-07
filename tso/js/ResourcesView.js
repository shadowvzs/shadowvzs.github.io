class ResourcesView {
    constructor(resources) {
        this.resources = resources
        this.selectedResource = null;
    }

    getCSS() {
        return `
           .resources-list {
                display: flex;
                justify-content: center;
                max-width: 100%;
                flex-wrap: wrap;
                border: 1px solid #ddd;
                padding: 8px;
           }

           .resource {
                cursor: pointer;
                transition: 0.3s ease;
                user-select: none;
                border: 1px solid transparent;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
           }
            
           .resource:hover {
                border: 1px solid #ddd;
            }
        `;
    }

    render(elem) {
        this.container = document.createElement('section');
        this.container.classList.add('resources-view');
        this.resourcesListElement = document.createElement('div');
        this.resourcesListElement.classList.add('resources-list');
        const style = document.createElement('style');
        style.innerHTML = this.getCSS();
        this.container.appendChild(style);
        this.renderResourcesListUI();
        this.container.appendChild(this.resourcesListElement);
        elem.appendChild(this.container);
    }

    renderSingleResourceListUI(resource) {
        const resourceElement = document.createElement('div');
        resourceElement.classList.add('resource');
        resourceElement.style.cursor = 'pointer';
        resourceElement.onclick = () => { alert(id); };
        const img = document.createElement('img');
        img.src = resource.icon;
        img.title = resource.name;
        img.dataset.id = resource.id;
        img.style.width = '24px';
        resourceElement.appendChild(img);
        return resourceElement;
    }

    renderResourcesListUI() {
        this.resourcesListElement.innerHTML = '';
        const fr = document.createDocumentFragment();
        const resources = Object.entries(this.resources).filter(([, resource]) => resource.grade);

        for (const [key, resource] of resources) {
            resource.id = key;
            fr.appendChild(this.renderSingleResourceListUI(resource));
        }

        this.resourcesListElement.appendChild(fr);
    }
}
