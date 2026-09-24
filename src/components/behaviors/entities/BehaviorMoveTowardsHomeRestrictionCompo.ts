import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorMoveTowardsHomeRestrictionData extends BPComponent {
    priority: number;

    speedMultiplier?: number;
}

export class SetBehaviorMoveTowardsHomeRestriction extends BehaviorEntityComponentBuilder<BehaviorMoveTowardsHomeRestrictionData> {
    /**
     * 
     * @param {BehaviorMoveTowardsHomeRestrictionData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMoveTowardsHomeRestrictionData) {
        super("minecraft:behavior.move_towards_home_restriction", params);
    }
}