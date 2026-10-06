import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
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

export class SetBehaviorSwimWithEntity extends BehaviorEntityComponentBuilder<BehaviorSwimWithEntityData, "minecraft:behavior.swim_with_entity"> {
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