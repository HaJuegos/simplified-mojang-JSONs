import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface WaterMovementData extends BPComponent {
    dragFactor?: number;
}

export class SetWaterMovement extends BehaviorEntityComponentBuilder<WaterMovementData, "minecraft:water_movement"> {
    /**
     * 
     * @param {WaterMovementData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: WaterMovementData) {
        super("minecraft:water_movement", params);
    }
}