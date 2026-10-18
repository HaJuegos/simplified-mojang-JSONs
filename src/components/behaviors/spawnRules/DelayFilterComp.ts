import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorSpawnRuleComponentBuilder } from "../../../builders/behaviors/spawnRules/SpawnRuleCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface DelayFilterData extends BPComponent {
    identifier: string | MinecraftEntityTypes;
    spawnChance: number;
    min: number;
    max: number;
}

export class SetDelayFilter extends BehaviorSpawnRuleComponentBuilder<DelayFilterData, "minecraft:delay_filter"> {
    /**
     * 
     * @param {DelayFilterData} params Parametros del componente.
     * @author HaJuegos - 17-10-2026
     * @constructor
     * @public
     */
    public constructor (params: DelayFilterData) {
        super("minecraft:delay_filter", params);
    }
}