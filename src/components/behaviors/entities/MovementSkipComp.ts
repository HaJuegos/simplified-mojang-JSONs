import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface MovementSkipData extends BPComponent {
    maxTurn?: number;
}

export class SetMovementSkip extends BehaviorEntityComponentBuilder<MovementSkipData, "minecraft:movement.skip"> {
    /**
     * 
     * @param {MovementSkipData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: MovementSkipData) {
        super("minecraft:movement.skip", params);
    }
}