import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface IgnoreCannotBeAttackedData extends BPComponent {
    filters?: EntityFilter | EntityFilter[];
}

export class SetIgnoreCannotBeAttacked extends BehaviorEntityComponentBuilder<IgnoreCannotBeAttackedData, "minecraft:ignore_cannot_be_attacked"> {
    /**
     * 
     * @param {IgnoreCannotBeAttackedData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: IgnoreCannotBeAttackedData) {
        super("minecraft:ignore_cannot_be_attacked", params);
    }
}