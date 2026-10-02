import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface LavaMovementData extends BPComponent {
    min?: number;
    max?: number;
    value?: number | [number, number] | {
        min?: number;
        max?: number;
        rangeMin?: number;
        rangeMax?: number;
    };
}

export class SetLavaMovement extends BehaviorEntityComponentBuilder<LavaMovementData, "minecraft:lava_movement"> {
    /**
     * 
     * @param {LavaMovementData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: LavaMovementData) {
        super("minecraft:lava_movement", params);
    }
}