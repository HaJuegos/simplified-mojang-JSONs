import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorMoveTowardsRestrictionData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
}

export class SetBehaviorMoveTowardsRestriction extends BehaviorEntityComponentBuilder<BehaviorMoveTowardsRestrictionData, "minecraft:behavior.move_towards_restriction"> {
    /**
     * 
     * @param {BehaviorMoveTowardsRestrictionData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMoveTowardsRestrictionData) {
        super("minecraft:behavior.move_towards_restriction", params);
    }
}