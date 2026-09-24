import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityAttackableTargetFilters, EntityFiltersTarget } from "../../../types/EntityFilters";

interface BehaviorHurtByTargetData extends BPComponent {
    priority: number;
    entityTypes?: EntityAttackableTargetFilters | EntityAttackableTargetFilters[];
    hurtOwner?: boolean;
}

export class SetBehaviorHurtByTarget extends BehaviorEntityComponentBuilder<BehaviorHurtByTargetData> {
    /**
     * 
     * @param {BehaviorHurtByTargetData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorHurtByTargetData) {
        super("minecraft:behavior.hurt_by_target", params);
    }
}