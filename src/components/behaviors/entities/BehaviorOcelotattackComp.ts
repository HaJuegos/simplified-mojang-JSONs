import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorOcelotattackData extends BPComponent {
    priority: number;
    cooldownTime?: number;
    maxDistance?: number;
    maxSneakRange?: number;
    maxSprintRange?: number;
    reachMultiplier?: number;
    sneakSpeedMultiplier?: number;
    sprintSpeedMultiplier?: number;
    walkSpeedMultiplier?: number;
    xMaxRotation?: number;
    yMaxHeadRotation?: number;
}

export class SetBehaviorOcelotattack extends BehaviorEntityComponentBuilder<BehaviorOcelotattackData> {
    /**
     * 
     * @param {BehaviorOcelotattackData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorOcelotattackData) {
        super("minecraft:behavior.ocelotattack", params);
    }
}