import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface SittableData extends BPComponent {
    sitEvent?: EntityFilter;
    standEvent?: EntityFilter;
}

export class SetSittable extends BehaviorEntityComponentBuilder<SittableData, "minecraft:sittable"> {
    /**
     * 
     * @param {SittableData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: SittableData) {
        super("minecraft:sittable", params);
    }
}