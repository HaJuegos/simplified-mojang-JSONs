import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface MovementSwayData extends BPComponent {
    maxTurn?: number;
    swayAmplitude?: number;
    swayFrequency?: number;
}

export class SetMovementSway extends BehaviorEntityComponentBuilder<MovementSwayData, "minecraft:movement.sway"> {
    /**
     * 
     * @param {MovementSwayData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: MovementSwayData) {
        super("minecraft:movement.sway", params);
    }
}