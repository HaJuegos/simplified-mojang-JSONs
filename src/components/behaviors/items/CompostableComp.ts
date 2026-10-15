import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface CompostableData extends BPComponent {
    compostingChance?: number;
}

export class SetCompostable extends BehaviorItemsComponentsBuilder<CompostableData, "minecraft:compostable"> {
    /**
     * 
     * @param {CompostableData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params?: CompostableData) {
        super("minecraft:compostable", params);
    }
}