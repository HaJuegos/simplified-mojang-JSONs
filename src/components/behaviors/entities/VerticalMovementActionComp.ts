import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface VerticalMovementActionData extends BPComponent {
    verticalVelocity?: number;
}

export class SetVerticalMovementAction extends BehaviorEntityComponentBuilder<VerticalMovementActionData, "minecraft:vertical_movement_action"> {
    /**
     * 
     * @param {VerticalMovementActionData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: VerticalMovementActionData) {
        super("minecraft:vertical_movement_action", params);
    }
}