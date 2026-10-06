import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface MovementData extends BPComponent {
    min?: number;
    max?: number;
    value?: number | [number, number] | {
        min?: number;
        max?: number;
        rangeMin?: number;
        rangeMax?: number;
    };
}

export class SetMovement extends BehaviorEntityComponentBuilder<MovementData, "minecraft:movement"> {
    /**
     * 
     * @param {MovementData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: MovementData) {
        super("minecraft:movement", params);
    }
}