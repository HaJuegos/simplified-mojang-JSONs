import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface GroupSizeData extends BPComponent {
    filters?: EntityFilter | EntityFilter[];
    radius?: number;
}

export class SetGroupSize extends BehaviorEntityComponentBuilder<GroupSizeData> {
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