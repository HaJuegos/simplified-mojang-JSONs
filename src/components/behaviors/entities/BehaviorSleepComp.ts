import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorSleepData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    canSleepWhileRiding?: boolean;
    cooldownTime?: number;
    sleepColliderHeight?: number;
    sleepColliderWidth?: number;
    sleepYOffset?: number;
    timeoutCooldown?: number;
    goalRadius?: number;
}

export class SetBehaviorSleep extends BehaviorEntityComponentBuilder<BehaviorSleepData> {
    /**
     * 
     * @param {BehaviorSleepData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSleepData) {
        super("minecraft:behavior.sleep", params);
    }
}