const slot = {
    weapon: 0,
    armor: 1,
    accessory: 2,
    any: 3
}

const slotConditions = {
    [slot.weapon]: (item => item.tags.includes('weapon')),
    [slot.armor]: (item => item.tags.includes('armor')),
    [slot.accessory]: (item => item.tags.includes('accessory')),
    [slot.any]: (item => true),
};

export class Inventory {
    constructor(deck, maxEquipmentSlot = 4) {
        this.prepareSlots(maxEquipmentSlot);
        this.deck = deck;
    }

    prepareSlots(maxEquipmentSlot) {
        this.maxEquipmentSlot = maxEquipmentSlot;
        this.slots = new Array(this.maxEquipmentSlot).fill(null);
    }

    equip(itemId, index, fusion) {
        const item = this.deck.getItem(itemId);
        if (slotConditions[index](item)) {
            if (fusion !== undefined && item.fusion !== fusion) { item.setFusion(fusion); }
            this.slots[index] = item
            this.deck.take(itemId);
        }
    }

    unEquip(index) {
        const item = this.slots[index];
        this.slots[index] = null;
        this.deck.putBack(item.id);
        return item;
    }

    getInfo() {
        return this.slots.filter(Boolean).map(x => x.getInfo().slice(1)).flat(2);
    }

    getIndex(itemId) {
        return this.slots.findIndex(x => x && x.id === itemId);
    }

    get getSlotData() {
        return this.slots.map(x => x ? (x.id + 'f' + x.fusion) : '').join('-');
    }

    get getEquipedItemIds() {
        return this.slots.map(x => x && x.id).filter(Boolean);
    }
}