import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorSlimeKeepOnJumpingData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
}

export class SetBehaviorSlimeKeepOnJumping extends BehaviorEntityComponentBuilder<BehaviorSlimeKeepOnJumpingData> {
    /**
     * 
     * @param {BehaviorSlimeKeepOnJumpingData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSlimeKeepOnJumpingData) {
        super("minecraft:behavior.slime_keep_on_jumping", params);
    }
}