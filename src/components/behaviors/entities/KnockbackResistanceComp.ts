import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface KnockbackResistanceData extends BPComponent {
    min?: number;
    max?: number;
    value?: number | [number, number] | {
        min?: number;
        max?: number;
        rangeMin?: number;
        rangeMax?: number;
    };
}

export class SetKnockbackResistance extends BehaviorEntityComponentBuilder<KnockbackResistanceData, "minecraft:knockback_resistance"> {
    /**
     * 
     * @param {KnockbackResistanceData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: KnockbackResistanceData) {
        super("minecraft:knockback_resistance", params);
    }
}