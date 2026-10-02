import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
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