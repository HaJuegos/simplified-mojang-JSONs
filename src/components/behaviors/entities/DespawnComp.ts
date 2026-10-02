import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface DespawnData extends BPComponent {
    despawnFromChance?: boolean;
    despawnFromDistance?: {
        minDistance: number;
        maxDistance: number;
    };
    despawnFromInactivity?: boolean;
    despawnFromSimulationEdge?: boolean;
    filters?: EntityFilter | EntityFilter[];
    minRangeInactivityTimer?: number;
    minRangeRandomChance?: number;
    removeChildEntities?: boolean;
}

export class SetDespawn extends BehaviorEntityComponentBuilder<DespawnData, "minecraft:despawn"> {
    /**
     * 
     * @param {DespawnData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: DespawnData) {
        super("minecraft:despawn", params);
    }
}