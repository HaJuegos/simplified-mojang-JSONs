import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorLookAtEntityData extends BPComponent {
    priority: number;
    lookDistance?: number;
    probability?: number;
    lookTime?: {
        min: number;
        max: number;
    };
    angleOfViewVertical?: number;
    angleOfViewHorizontal?: number;
    filters?: EntityFilter | EntityFilter[];
}

export class SetBehaviorLookAtEntity extends BehaviorEntityComponentBuilder<BehaviorLookAtEntityData> {
    /**
     * 
     * @param {BehaviorLookAtEntityData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorLookAtEntityData) {
        super("minecraft:behavior.look_at_entity", params);
    }
}