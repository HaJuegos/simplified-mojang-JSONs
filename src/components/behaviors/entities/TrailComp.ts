import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface TrailData extends BPComponent {
    blockType?: string;
    spawnFilter?: EntityFilter | EntityFilter[];
    spawnOffset?: [number, number, number];
}

export class SetTrail extends BehaviorEntityComponentBuilder<TrailData, "minecraft:trail"> {
    /**
     * 
     * @param {TrailData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: TrailData) {
        super("minecraft:trail", params);
    }
}