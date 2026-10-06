import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityDamageType, EntityFilter } from "../../../types/EntityFilters";

interface HurtOnConditionData extends BPComponent {
    damageConditions: DamageConditionsTypes[];
}

interface DamageConditionsTypes {
    cause: EntityDamageType;
    damagePerTick: number;
    filters?: EntityFilter | EntityFilter[];
}

export class SetHurtOnCondition extends BehaviorEntityComponentBuilder<HurtOnConditionData, "minecraft:hurt_on_condition"> {
    /**
     * 
     * @param {HurtOnConditionData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: HurtOnConditionData) {
        super("minecraft:hurt_on_condition", params);
    }
}