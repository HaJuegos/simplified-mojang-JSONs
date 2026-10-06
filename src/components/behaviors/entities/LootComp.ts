import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface LootData extends BPComponent {
    table: string;
}

export class SetLoot extends BehaviorEntityComponentBuilder<LootData, "minecraft:loot"> {
    /**
     * 
     * @param {LootData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: LootData) {
        super("minecraft:loot", params);
    }
}