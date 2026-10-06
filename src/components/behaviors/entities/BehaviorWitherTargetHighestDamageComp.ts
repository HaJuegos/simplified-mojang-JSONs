import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityAttackableTargetFilters } from "../../../types/EntityFilters";

interface BehaviorWitherTargetHighestDamageData extends BPComponent {
    priority: unknown;
    entityTypes?: EntityAttackableTargetFilters | EntityAttackableTargetFilters[];
}

export class SetBehaviorWitherTargetHighestDamage extends BehaviorEntityComponentBuilder<BehaviorWitherTargetHighestDamageData, "minecraft:behavior.wither_target_highest_damage"> {
    /**
     * 
     * @param {BehaviorWitherTargetHighestDamageData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorWitherTargetHighestDamageData) {
        super("minecraft:behavior.wither_target_highest_damage", params);
    }
}