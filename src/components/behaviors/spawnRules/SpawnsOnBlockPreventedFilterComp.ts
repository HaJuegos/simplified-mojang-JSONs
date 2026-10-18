import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface SpawnsOnBlockPreventedFilterData extends BPComponent {

}

export class SetSpawnsOnBlockPreventedFilter extends BehaviorSpawnRuleComponentBuilder<SpawnsOnBlockPreventedFilterData, "minecraft:spawns_on_block_prevented_filter"> {
    /**
     * 
     * @param {(string | MinecraftBlockTypes)[]} params Parametros del componente.
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor (params: (string | MinecraftBlockTypes)[]) {
        super("minecraft:spawns_on_block_prevented_filter", params);
    }
}