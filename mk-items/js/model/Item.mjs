import { itemTags } from '../data/item_tags.mjs';
import { itemAttributes } from '../data/item_attributes.mjs';
import { romanNumbers } from '../data/other.mjs';

export class Item {

    hasTags(tags) {
        return tags.every(tag => {
            if (typeof tag === 'number') {
                return this._tagsId.includes(tag);
            } else {
                return this.tags.includes(tag);
            }
        })
    }
   
    setTags(_tagsId) {
        this._tagsId = [..._tagsId];
        const stateTags = this.states.map(state => {
            const tags = state.attributes.map(x => x.tagsId);
            if (state.onlyFor) { tags.push(state.onlyFor); }
            return tags;
        });
        this._tagsId.push(...stateTags.flat(3));
        this.tags = this._tagsId.map(tagId => itemTags.valueMap[tagId]);
    }   
    
    setStates(_states) {
        this._states = _states;
        this.states = _states.map(x => ({
            attributes: x.attributeId.map(id => {
                console.log(id, x)
                const attribute = itemAttributes.valueMap[id];
                attribute.tags = attribute.tagsId.map(tagId => itemTags.valueMap[tagId]);
                return attribute;
            }),
            initValue: x.initValue,
            step: x.step,
            forTower: x.forTower,
            onlyFor: x.onlyFor,
            reqFusion: x.reqFusion,
            maxFusion: x.maxFusion,
        }))
    }
    
    setFusion(fusion) {
        if (fusion < 0 || fusion > 10) { return; }
        this.fusion = fusion;
        this.states.forEach((state, idx) => {
            state.value = state.initValue.map((val, vIdx) => {
                if (state.reqFusion && state.reqFusion > fusion) { return 0; }
                const step = state.step[vIdx] || 0;
                return val + step * fusion;
            });
        });

        this.imageUrl = './img/eq/' + this.images[Number(fusion === 10)];
    }

    getInfo() {
        const rows = [];
        rows.push(this.name);
        this.states.forEach(state => {
            state.attributes.map(x => {
                let rawDesc = x.description;
                if (state.onlyFor) { 
                    const characters = state.onlyFor.map(x => itemTags.valueMap[x].toUpperCase().replace('_', ' ')).join(', ');
                    rawDesc.replace('%s', characters);
                    rawDesc = `[${characters}] ` + rawDesc;
                }
                if (state.forTower) { 
                    const towers = state.forTower.map(x => itemTags.valueMap[x].toUpperCase().replace('_', ' ')).join(', ');
                    rawDesc.replace('%s', towers);
                    rawDesc = `[${towers}] ` + rawDesc;
                }
                state.value.forEach(v => {
                    rawDesc = rawDesc.replace('%d', v);
                })
                return rawDesc;
            }).forEach(desc => {
                if (state.reqFusion) {
                    if (state.value) {
                        rows.push(`[Fusion ${romanNumbers[state.reqFusion]}] ${desc}`);
                    }
                } else if (state.brutalityFor) {
                    rows.push(`[Brutality] ${desc}`);
                } else {
                    rows.push(desc);
                }

            })

        });
        return rows;
    }

    constructor(data, fusion = 10) {
        if (data) {
            // original data
            this._states = data.states;
            
            // other data
            this.id = data.id;
            this.name = data.name;
            this.images = data.images;
            this.setStates(data.states);
            this.setTags(data.tagsId);

            // special data
            this.setFusion(fusion);
        }
    }
}