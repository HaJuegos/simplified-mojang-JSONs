import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface UnderwaterMovementData extends BPComponent {
    min?: number;
    max?: number;
    value?: number | [number, number] | {
        min?: number;
        max?: number;
        rangeMin?: number;
        rangeMax?: number;
    };
}

export class SetUnderwaterMovement extends BehaviorEntityComponentBuilder<UnderwaterMovementData, "minecraft:underwater_movement"> {
    /**
     * 
     * @param {UnderwaterMovementData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: UnderwaterMovementData) {
        super("minecraft:underwater_movement", params);
    }
}