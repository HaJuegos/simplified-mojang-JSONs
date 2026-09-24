import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorMoveTowardsTargetData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    withinRadius?: number;
}

export class SetBehaviorMoveTowardsTarget extends BehaviorEntityComponentBuilder<BehaviorMoveTowardsTargetData> {
    /**
     * 
     * @param {BehaviorMoveTowardsTargetData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMoveTowardsTargetData) {
        super("minecraft:behavior.move_towards_target", params);
    }
}