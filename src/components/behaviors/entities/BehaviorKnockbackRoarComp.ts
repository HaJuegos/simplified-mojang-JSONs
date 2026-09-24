import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter, EntityFiltersTarget } from "../../../types/EntityFilters";

interface BehaviorKnockbackRoarData extends BPComponent {
    priority: number;
    attackTime?: number;
    cooldownTime?: number;
    damageFilters?: EntityFilter | EntityFilter[];
    duration?: number;
    knockbackDamage?: number;
    knockbackStrength?: number;
    knockbackFilters?: EntityFilter | EntityFilter[];
    knockbackHorizontalStrength?: number;
    knockbackRange?: number;
    knockbackVerticalStrength?: number;
    knockbackHeightCap?: number;
    trackTarget?: boolean;
    onRoarEnd?: string | EntityFiltersTarget;
}

export class SetBehaviorKnockbackRoar extends BehaviorEntityComponentBuilder<BehaviorKnockbackRoarData> {
    /**
     * 
     * @param {BehaviorKnockbackRoarData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorKnockbackRoarData) {
        super("minecraft:behavior.knockback_roar", params);
    }
}