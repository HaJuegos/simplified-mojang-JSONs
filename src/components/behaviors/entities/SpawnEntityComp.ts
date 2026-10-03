import { MinecraftEntityTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface SpawnEntityData extends BPComponent {
    entities: EntitiesTypes[] | EntitiesTypes;
}

interface EntitiesTypes {
    filters?: EntityFilter | EntityFilter[];
    maxWaitTime?: number;
    minWaitTime?: number;
    numToSpawn?: number;
    shouldLeash?: boolean;
    singleUse?: boolean;
    spawnEntity?: string | MinecraftEntityTypes;
    spawnEvent?: string;
    spawnItem?: string | MinecraftItemTypes;
    spawnItemEvent?: EntityFilter;
    spawnMethod?: string;
    spawnSound?: string;
}

export class SetSpawnEntity extends BehaviorEntityComponentBuilder<SpawnEntityData, "minecraft:spawn_entity"> {
    /**
     * 
     * @param {SpawnEntityData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: SpawnEntityData) {
        super("minecraft:spawn_entity", params);
    }
}