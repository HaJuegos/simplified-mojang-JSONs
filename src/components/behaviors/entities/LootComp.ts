import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface LootData extends BPComponent {
    table: string;
}

export class SetLoot extends BehaviorEntityComponentBuilder<LootData> {
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