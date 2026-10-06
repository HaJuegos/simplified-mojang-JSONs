import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface MovementGenericData extends BPComponent {
    maxTurn?: number;
}

export class SetMovementGeneric extends BehaviorEntityComponentBuilder<MovementGenericData, "minecraft:movement.generic"> {
    /**
     * 
     * @param {MovementGenericData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: MovementGenericData) {
        super("minecraft:movement.generic", params);
    }
}