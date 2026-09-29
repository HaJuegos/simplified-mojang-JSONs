import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface RailMovementData extends BPComponent {
    maxSpeed?: number;
}

export class SetRailMovement extends BehaviorEntityComponentBuilder<RailMovementData> {
    /**
     * 
     * @param {RailMovementData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: RailMovementData) {
        super("minecraft:rail_movement", params);
    }
}