import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type DamageData = number | {
    value?: number;
};

export class SetDamage extends BehaviorItemsComponentsBuilder<DamageData, "minecraft:damage"> {
    /**
     * 
     * @param {DamageData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: DamageData) {
        super("minecraft:damage", params);
    }
}