import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorMoveTowardsRestrictionData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
}

export class SetBehaviorMoveTowardsRestriction extends BehaviorEntityComponentBuilder<BehaviorMoveTowardsRestrictionData> {
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