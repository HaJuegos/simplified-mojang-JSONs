import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface LootData extends BPComponent {

}

export class SetLoot extends BehaviorBlockComponentBuilder<LootData, "minecraft:loot"> {
    /**
     * 
     * @param {string} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: string) {
        super("minecraft:loot", params);
    }
}