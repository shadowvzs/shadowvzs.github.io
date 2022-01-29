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
        this.tags = _tagsId.map(tagId => itemTags.valueMap[tagId]);
        const stateTags = this.states.map(state => state.attributes.map(x => x.tagsId));
        this._tagsId.push(...stateTags.flat(3));
    }   
    
    setStates(_states) {
        this._states = _states;
        this.states = _states.map(x => ({
            attributes: x.attributeId.map(id => {
                const attribute = itemAttributes.valueMap[id];
                attribute.tags = attribute.tagsId.map(tagId => itemTags.valueMap[tagId]);
                return attribute;
            }),
            reqFusion: x.reqFusion,
            maxFusion: x.maxFusion,
        }))
    }
    
    setFusion(fusion) {
        if (fusion < 0 || fusion > 10) { return; }
        this.fusion = fusion;
        this.states.forEach((state, idx) => {
            if (state.reqFusion && state.reqFusion > fusion) {
                state.value = 0;
            } else {
                const stateOptions = this._states[idx];
                const step = stateOptions.step || 0;
                state.value = stateOptions.initValue + step * fusion;
            }
        });

        this.imageUrl = './img/eq/' + this.images[Number(fusion === 10)];
    }

    getInfo() {
        const rows = [];
        rows.push(this.name);
        this.states.forEach(state => {
            const description = state.attributes.map(x => x.description.replace('%d', state.value));
            if (state.reqFusion) {
                if (state.value) {
                    rows.push(`[Fusion ${romanNumbers[state.reqFusion]}] ${description.join(', ')}`);
                }
            } else {
                rows.push(...description);
            }
        });
        rows.push(`Labels: ${this.tags.join(', ')}`);
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