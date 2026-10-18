import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface SpawnsAboveBlockFilterData extends BPComponent {
    distance?: number;
    blocks: (string | MinecraftBlockTypes) | (string | MinecraftBlockTypes)[];
}

export class SetSpawnsAboveBlockFilter extends BehaviorSpawnRuleComponentBuilder<SpawnsAboveBlockFilterData, "minecraft:spawns_above_block_filter"> {
    /**
     * 
     * @param {SpawnsAboveBlockFilterData} params Parametros del componente.
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor (params: SpawnsAboveBlockFilterData) {
        super("minecraft:spawns_above_block_filter", params);
    }
}