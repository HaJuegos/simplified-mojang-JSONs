import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface MovementFlyData extends BPComponent {
    maxTurn?: number;
}

export class SetMovementFly extends BehaviorEntityComponentBuilder<MovementFlyData> {
    /**
     * 
     * @param {MovementFlyData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: MovementFlyData) {
        super("minecraft:movement.fly", params);
    }
}