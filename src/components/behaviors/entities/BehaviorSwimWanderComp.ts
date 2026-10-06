import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorSwimWanderData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    interval?: number;
    lookAhead?: number;
    wanderTime?: number;
}

export class SetBehaviorSwimWander extends BehaviorEntityComponentBuilder<BehaviorSwimWanderData, "minecraft:behavior.swim_wander"> {
    /**
     * 
     * @param {BehaviorSwimWanderData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSwimWanderData) {
        super("minecraft:behavior.swim_wander", params);
    }
}