import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface SpawnOnDeathData extends BPComponent {
    additionalSpawnRange?: {
        min: number;
        max: number;
    };
    entityToSpawn?: string | MinecraftEntityTypes;
    filters?: EntityFilter | EntityFilter[];
    inheritParentName?: boolean;
    spawnAmount?: number;
    spawnMethod?: "born" | "spawned" | "summoned";
}

export class SetSpawnOnDeath extends BehaviorEntityComponentBuilder<SpawnOnDeathData> {
    /**
     * 
     * @param {SpawnOnDeathData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: SpawnOnDeathData) {
        super("minecraft:spawn_on_death", params);
    }
}