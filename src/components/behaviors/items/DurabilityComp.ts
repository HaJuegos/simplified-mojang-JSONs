import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface DurabilityData extends BPComponent {
    maxDurability: number;
    damageChance: {
        min: number;
        max: number;
    };
}

export class SetDurability extends BehaviorItemsComponentsBuilder<DurabilityData, "minecraft:durability"> {
    /**
     * 
     * @param {DurabilityData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: DurabilityData) {
        super("minecraft:durability", params);
    }
}