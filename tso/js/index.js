

const buildingsView = new BuildingsView(buildings, allResources);
buildingsView.render(document.querySelector('#root'));

const resourcesView = new ResourcesView(allResources);
resourcesView.render(document.querySelector('#root'));