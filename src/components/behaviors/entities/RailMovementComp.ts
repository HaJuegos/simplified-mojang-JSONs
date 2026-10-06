import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface RailMovementData extends BPComponent {
    maxSpeed?: number;
}

export class SetRailMovement extends BehaviorEntityComponentBuilder<RailMovementData, "minecraft:rail_movement"> {
    /**
     * 
     * @param {RailMovementData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: RailMovementData) {
        super("minecraft:rail_movement", params);
    }
}