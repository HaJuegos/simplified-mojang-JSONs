import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface GroupSizeData extends BPComponent {
    filters?: EntityFilter | EntityFilter[];
    radius?: number;
}

export class SetGroupSize extends BehaviorEntityComponentBuilder<GroupSizeData, "minecraft:group_size"> {
    /**
     * 
     * @param {GroupSizeData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: GroupSizeData) {
        super("minecraft:group_size", params);
    }
}