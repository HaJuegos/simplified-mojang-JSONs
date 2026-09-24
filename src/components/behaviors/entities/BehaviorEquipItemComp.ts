import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorEquipItemData extends BPComponent {
    priority: number;
}

export class SetBehaviorEquipItem extends BehaviorEntityComponentBuilder<BehaviorEquipItemData> {
    /**
     * 
     * @param {BehaviorEquipItemData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorEquipItemData) {
        super("minecraft:behavior.equip_item", params);
    }
}