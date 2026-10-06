import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface MovementJumpData extends BPComponent {
    maxTurn?: number;
    jump_delay: [number, number];
}

export class SetMovementJump extends BehaviorEntityComponentBuilder<MovementJumpData, "minecraft:movement.jump"> {
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