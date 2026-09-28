import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface MovementJumpData extends BPComponent {
    maxTurn?: number;
    jump_delay: [number, number];
}

export class SetMovementJump extends BehaviorEntityComponentBuilder<MovementJumpData> {
    /**
     * 
     * @param {MovementJumpData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: MovementJumpData) {
        super("minecraft:movement.jump", params);
    }
}