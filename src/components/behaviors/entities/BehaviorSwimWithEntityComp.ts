import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityAttackableTargetFilters } from "../../../types/EntityFilters";

interface BehaviorSwimWithEntityData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    successRate?: number;
    chanceToStop?: number;
    stateCheckInterval?: number;
    catchUpThreshold?: number;
    matchDirectionThreshold?: number;
    catchUpMultiplier?: number;
    searchRange?: number;
    stopDistance?: number;
    entityTypes?: EntityAttackableTargetFilters | EntityAttackableTargetFilters[];
}

export class SetBehaviorSwimWithEntity extends BehaviorEntityComponentBuilder<BehaviorSwimWithEntityData> {
    /**
     * 
     * @param {BehaviorSwimWithEntityData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSwimWithEntityData) {
        super("minecraft:behavior.swim_with_entity", params);
    }
}