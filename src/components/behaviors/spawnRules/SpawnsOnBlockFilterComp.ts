import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";

type BlockDataTypes = {
    name: string | MinecraftBlockTypes;
    states?: Record<string, string | boolean | number>;
    tags?: never;
} | {
    name?: never;
    states?: Record<string, string | boolean | number>;
    tags: string | MoLangValue;
};

interface SpawnsOnBlockFilterData extends BPComponent {

}

export class SetSpawnsOnBlockFilter extends BehaviorSpawnRuleComponentBuilder<SpawnsOnBlockFilterData, "minecraft:spawns_on_block_filter"> {
    /**
     * 
     * @param {(string | MinecraftBlockTypes)[]} params Parametros del componente.
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor (params: (string | MinecraftBlockTypes | BlockDataTypes) | (string | MinecraftBlockTypes | BlockDataTypes)[]) {
        super("minecraft:spawns_on_block_filter", params);
    }
}