import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface MovementSwayData extends BPComponent {
    maxTurn?: number;
    swayAmplitude?: number;
    swayFrequency?: number;
}

export class SetMovementSway extends BehaviorEntityComponentBuilder<MovementSwayData> {
    /**
     * 
     * @param {MovementSwayData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: MovementSwayData) {
        super("minecraft:movement.sway", params);
    }
}