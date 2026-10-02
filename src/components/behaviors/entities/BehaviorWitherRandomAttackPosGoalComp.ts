import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorWitherRandomAttackPosGoalData extends BPComponent {
    priority: number;
}

export class SetBehaviorWitherRandomAttackPosGoal extends BehaviorEntityComponentBuilder<BehaviorWitherRandomAttackPosGoalData, "minecraft:behavior.wither_random_attack_pos_goal"> {
    /**
     * 
     * @param {BehaviorWitherRandomAttackPosGoalData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorWitherRandomAttackPosGoalData) {
        super("minecraft:behavior.wither_random_attack_pos_goal", params);
    }
}