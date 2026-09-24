import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorOwnerHurtByTargetData extends BPComponent {
    priority: number;
    entityTypes?: EntityFilter | EntityFilter[];
}

export class SetBehaviorOwnerHurtByTarget extends BehaviorEntityComponentBuilder<BehaviorOwnerHurtByTargetData> {
    /**
     * 
     * @param {BehaviorOwnerHurtByTargetData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorOwnerHurtByTargetData) {
        super("minecraft:behavior.owner_hurt_by_target", params);
    }
}