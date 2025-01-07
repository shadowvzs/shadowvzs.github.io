class CurrentBuildingView {
    constructor(resources) {
        this.resources = resources;
        this.building = null;
        this.container = document.createElement('div');
        this.elements = {};
        this.createView();
    }

    getCSS() {
        return `
            .current-building-view {
                display: flex;
                flex-wrap: wrap;
                gap: 16px;
                padding: 16px;
                box-sizing: border-box;
            }
            .building-details {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }
            .hide {
                display: none;
            }
            
            ul, li {
                list-style-type: none;
                margin: 0;
                padding: 0;
            }

            li {
                display: flex;
                align-items: center;
                padding-left: 16px;
            }
            li img {
                padding-left: 4px;
            }
            li.duration {
                padding-top: 8px;
            }
            
            .building-details {
                font-size: 14px;
            }
            
            .building-info figcaption {
                white-space: nowrap;
            }

            .input-line:not(.hide) {
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .building-benefit-info {
                margin-top: 16px;
            }

            .building-name {
                font-weight: bold;
            }
        `;
    }

    createView() {
        this.container.innerHTML = `
            <style></style>
            <div class='current-building-view'>                
                <figure class='building-info'>
                    <img src='http://www.listercarterhomes.com/wp-content/uploads/2013/11/dummy-image-square.jpg' class='building-image' height='128' />
                    <figcaption>
                        <span class='building-name'>Building name</span> - Lv <span class='building-lv'>1</span>/<span class='building-max-lv'>2</span>
                    </figcaption>
                    <div class='input-line building-level-box'>
                        <span>Level: </span>
                        <input type='range' min='1' max='2' value='1' name='building-level' />
                    </div>
                    <div class='input-line base-production-time-box'>
                        <span>Prod. time: </span>
                        <input type='number' min='1' value='1' name='production-time' style='width:48px' /> sec
                    </div>
                    <div class='input-line production-buff-box'>
                        <span>Buff +</span>
                        <input type='number' min='0' max='256' value='0' name='production-buff' style='width:48px' />%
                    </div>
                    <div class='input-line travel-input-box'>
                        <span>Travel time: </span>
                        <input type='number' min='16' max='256' value='32' name='travel-time' style='width:48px' /> sec
                    </div>

                    <div class='building-benefit-info'></div>
                </figure>
                <div class='building-details'>
                    <span class='required-level'></span>
                    <span class='building-cost'><div class='info-group'></div></span>
                    <span class='building-upgrade-cost'><div class='info-group'></div></span>
                    <span class='building-maxing-cost'><div class='info-group'></div></span>
                    <span class='building-move-cost'><div class='info-group'></div></span>
                </div>
            </div>        
        `;

        this.elements = {
            style: this.container.querySelector('style'),
            image: this.container.querySelector('.building-image'),
            name: this.container.querySelector('.building-name'),
            level: this.container.querySelector('.building-lv'),
            maxLevel: this.container.querySelector('.building-max-lv'),
            levelInput: this.container.querySelector('input[name="building-level"]'),
            cost: this.container.querySelector('.building-cost'),
            upgradeCost: this.container.querySelector('.building-upgrade-cost'),
            moveCost: this.container.querySelector('.building-move-cost'),
            maxingCost: this.container.querySelector('.building-maxing-cost'),
            travelTimeBox: this.container.querySelector('.travel-input-box'),
            benefitInfo: this.container.querySelector('.building-benefit-info'),
            buildingLevelBox: this.container.querySelector('.building-level-box'),
            productionTimeBox: this.container.querySelector('.base-production-time-box'),
            productionBuffBox: this.container.querySelector('.production-buff-box'),
            productionBuffInput: this.container.querySelector('input[name="production-buff"]'),
            productionTimeInput: this.container.querySelector('input[name="production-time"]'),
            travelTimeInput: this.container.querySelector('input[name="travel-time"]'),
            requiredLevel: this.container.querySelector('.required-level'),
        };

        this.elements.style.innerHTML = this.getCSS();
        this.elements.levelInput.onchange = () => this.render();
        this.elements.productionTimeInput.onchange = () => this.render();
        this.elements.productionBuffInput.onchange = () => this.render();
        this.elements.travelTimeInput.onchange = () => this.render();
    }

    setBuilding(building) {
        this.building = building;
        const {
            name,
            level,
            maxLevel,
            levelInput,
            travelTimeBox,
            productionTimeBox,
            productionBuffBox,
            productionTimeInput,
            buildingLevelBox,
            requiredLevel,
        } = this.elements;

        const maxLv = building.perLevel.length;
        levelInput.value = 1;
        levelInput.min = 1;
        levelInput.max = maxLv;
        level.textContent = 1;
        name.textContent = building.name;
        maxLevel.textContent = maxLv;

        if (building.production) {
            travelTimeBox.classList.remove('hide');
            productionTimeBox.classList.remove('hide');
            productionBuffBox.classList.remove('hide');
            productionTimeInput.value = building.production.time;
        } else {
            travelTimeBox.classList.add('hide');
            productionTimeBox.classList.add('hide');
            productionBuffBox.classList.add('hide');
        }

        if (maxLv === 1) {
            buildingLevelBox.classList.add('hide');
        } else {
            buildingLevelBox.classList.remove('hide');
        }

        requiredLevel.innerHTML = `<strong>Required level</strong>: ${building.level || 0}`;
        this.render();
    }

    render() {
        const {
            image,
            level,
            levelInput,
            cost,
            upgradeCost,
            moveCost,
            maxingCost,
            benefitInfo,
        } = this.elements;

        const building = this.building;
        const lv = parseInt(levelInput.value);
        const maxLv = building.perLevel.length;
        const info = building.perLevel[lv - 1];
        level.textContent = lv;
        image.src = info.image;

        const tillCurrentLevel = this.extractPerLevelData(building.perLevel.slice(0, lv));
        cost.querySelector('.info-group')
            .replaceWith(this.convertPerLevelDataToHTML('Current Cost', tillCurrentLevel)); 

        if (maxLv > 1 && lv < maxLv) {
             if ((lv + 1) < maxLv) {
                upgradeCost.classList.remove('hide');
                const nextCost = this.extractPerLevelData(building.perLevel.slice(lv, lv + 1));
                upgradeCost.querySelector('.info-group')
                    .replaceWith(this.convertPerLevelDataToHTML('Next Upgrade', nextCost)); 
            } else {
                upgradeCost.classList.add('hide');
            }
            maxingCost.classList.remove('hide');
            const maxCost = this.extractPerLevelData(building.perLevel.slice(lv, building.perLevel.length));
            maxingCost.querySelector('.info-group')
                .replaceWith(this.convertPerLevelDataToHTML('Max Upgrade', maxCost)); 
        } else {
            upgradeCost.classList.add('hide');
            maxingCost.classList.add('hide');
        }

        if (info.moveCost) {
            const movCost = this.extractMoveCostData(info);
            moveCost.classList.remove('hide');
            moveCost.querySelector('.info-group')
                .replaceWith(this.convertPerLevelDataToHTML('Mov. Cost', movCost)); 
        } else {
            moveCost.classList.add('hide');
        }

        if (info.storage) {
            benefitInfo.innerHTML = `<strong>Storage</strong>: ${info.storage}`;
        } else if (info.population) {
            benefitInfo.innerHTML = `<strong>Population</strong>: ${info.population}`;
        } else if (building.production) {
            benefitInfo.innerHTML = '';
            const productionData = this.getProductionData(building, lv);
            benefitInfo.appendChild(this.convertProductionDataToHTML(productionData));
        } else {
            benefitInfo.innerHTML = '';
        }
    }

    convertResourceDataToHTML(resource, amount) {
        return `${amount} <img src='${resource.icon}' alt='${resource.name}' title='${resource.name}' width='24' />`;
    }

    convertPerLevelDataToHTML(title, rawData) {
        const div = document.createElement('div');
        div.classList.add('info-group');
        const ul = document.createElement('ul');
        const { duration, cost, gem } = rawData;
        if (cost) {
            const { resources } = this;
            const costHTML = Object.entries(cost).map(([item, amount]) => {
                const resource = resources[item];
                return `<li>${this.convertResourceDataToHTML(resource, amount)}</li>`;
            }).join('');
            ul.innerHTML += costHTML;
        }

        if (gem) {
            const gemResource = this.resources['gem'];
            ul.innerHTML += `<li> Or with  ${this.convertResourceDataToHTML(gemResource, gem)}</li>`;
        }

        if (duration) {
            ul.innerHTML += `<li class='duration'><strong>Duration</strong>: ${getFormatedDuration(duration)}</li>`;
        }

        div.innerHTML = `<strong>${title}</strong>`;
        div.appendChild(ul);
        return div;
    }

    extractMoveCostData(perLevelData) {
        const rawData = {};
        if (perLevelData.moveCost) {
            rawData.cost = {};
            perLevelData.moveCost.forEach(([item, amount]) => {
                rawData.cost[item] = amount;
            });
        }

        if (perLevelData.moveGem) {
            rawData.gem = perLevelData.moveGem;
        }
        return rawData;
    }

    extractPerLevelData(perLevelArray) {
        const rawData = perLevelArray.reduce((acc, curr) => {
            if (curr.duration) {
                if (!acc.duration) {
                    acc.duration = 0;
                }
                acc.duration += curr.duration;
            }

            if (curr.cost) {
                if (!acc.cost) {
                    acc.cost = {};
                }
                curr.cost.forEach(([item, amount]) => {
                    acc.cost[item] = (acc.cost[item] || 0) + amount;
                });
            }

            if (curr.gem) {
                if (!acc.gem) {
                    acc.gem = 0;
                }
                acc.gem += curr.gem;
            }

            return acc;
        }, {});

        return rawData;
    }

    getProductionData(building, level) {
        const {
            productionBuffInput,
            productionTimeInput,
            travelTimeInput,
        } = this.elements;

        const { input = [], output } = building.production;

        const baseProductionTime = parseInt(productionTimeInput.value || 0);
        const additionalBuffValue = parseInt(productionBuffInput.value || 0);
        const travelTime = parseInt(travelTimeInput.value || 0);
        const totalProductionTime = baseProductionTime + travelTime;
        const finalInput = input.map(({ item, amount }) => ({
            item,
            amount: amount * level,
        }));

        const finalOutput = output.map(({ item, amount }) => ({
            item,
            amount: amount * level * (1 + Math.floor(additionalBuffValue / 100)),
        }));

        const halfDayProductionRatio = Math.floor(12 * 60 * 60 / totalProductionTime);

        const consumption = finalInput.map(({ item, amount }) => ({ item, amount: amount * halfDayProductionRatio }));
        const production = finalOutput.map(({ item, amount }) => ({ item, amount: amount * halfDayProductionRatio }));
    
        return {
            consumption,
            production,
            finalInput,
            finalOutput,
        };
    }

    convertProductionDataToHTML(rawData) {
        const div = document.createElement('div');
        div.classList.add('info-group');
        div.innerHTML = '<strong>Production</strong>';
        const {
            finalInput,
            finalOutput,
            consumption,
            production
        } = rawData;

        const { resources } = this;

        const finalInputHTML = finalInput.map(({ item, amount }) => this.convertResourceDataToHTML(resources[item], -amount)).join(' + ');
        const finalOutputHTML = finalOutput.map(({ item, amount }) => this.convertResourceDataToHTML(resources[item], amount)).join(' + ');

        const finalConsuptionHTML = consumption.map(({ item, amount }) => this.convertResourceDataToHTML(resources[item], -amount)).join(', ');
        const finalProductionHTML = production.map(({ item, amount }) => this.convertResourceDataToHTML(resources[item], amount)).join(', ');

        div.innerHTML = `
            <strong>Production</strong>
            <ul>
                <li> ${finalInputHTML}&nbsp&nbsp=>&nbsp&nbsp${finalOutputHTML}</li>
            </ul>
            <br />
            <strong>Production (12h)</strong>
            <ul>
                <li> ${finalConsuptionHTML}&nbsp&nbsp=>&nbsp&nbsp${finalProductionHTML}</li>
            </ul>
        `;
        return div;
    }
}

class BuildingsView {
    constructor(buildings, resources) {
        this.buildings = buildings
        this.selectedBuilding = null;
        this.currentBuildingView = new CurrentBuildingView(resources);
    }

    getCSS() {
        return `
            .buildings-view {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
            }
           .building-list {
                display: flex;
                justify-content: center;
                border: 1px solid #ddd;
                padding: 8px;
                flex: 1;
           }

           .building {
                cursor: pointer;
                transition: 0.3s ease;
                user-select: none;
                border: 1px solid transparent;
                border-radius: 4px;
           }
            
           .building:hover {
                background-color: #f0f0f0;
                border: 1px solid #aaa;
            }
            
            .current-building {
                display: flex;
                flex-direction: column;
                justify-content: center;
                border: 1px solid #ddd;
                padding: 8px;
                flex: 1;
            }

            .hide {
                display: none;
            }
        `;
    }

    render(elem) {
        this.container = document.createElement('section');
        this.container.classList.add('buildings-view');
        this.buildingListElement = document.createElement('div');
        this.buildingListElement.classList.add('building-list');
        this.currentBuildingElement = document.createElement('div');
        this.currentBuildingElement.classList.add('current-building');
        const style = document.createElement('style');
        style.innerHTML = this.getCSS();
        this.container.appendChild(style);

        // render elements
        this.renderCurrentBuildingView();
        this.renderBuildingListUI();

        // inject elements into the DOM
        this.currentBuildingElement.appendChild(this.currentBuildingView.container);
        this.container.appendChild(this.buildingListElement);
        this.container.appendChild(this.currentBuildingElement);
        elem.appendChild(this.container);
    }

    renderCurrentBuildingView(id) {
        if (!id || this.selectedBuilding === id) {
            this.selectedBuilding = null;
            this.currentBuildingElement.classList.add('hide');
            return;
        }

        this.selectedBuilding = id;
        this.currentBuildingElement.classList.remove('hide');
        const building = this.buildings[id];
        this.currentBuildingView.setBuilding(building);
    }

    renderBuildingIcon(building) {
        const buildingWrapperElement = document.createElement('div');
        const buildingElement = document.createElement('div');
        buildingWrapperElement.appendChild(buildingElement);
        buildingElement.classList.add('building');
        buildingElement.style.cursor = 'pointer';
        buildingElement.onclick = () => this.renderCurrentBuildingView(building.id);
        const img = document.createElement('img');
        img.src = building.icon;
        img.title = building.name;
        img.dataset.id = building.id;
        img.style.width = '64px';
        buildingElement.appendChild(img);
        return buildingWrapperElement;
    }

    renderBuildingListUI() {
        this.buildingListElement.innerHTML = '';
        const fr = document.createDocumentFragment();
        for (const [key, building] of Object.entries(this.buildings)) {
            building.id = key;
            fr.appendChild(this.renderBuildingIcon(building));
        }
        this.buildingListElement.appendChild(fr);
    }
}
