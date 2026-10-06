import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface MovementAmphibiousData extends BPComponent {
    maxTurn?: number;
}

export class SetMovementAmphibious extends BehaviorEntityComponentBuilder<MovementAmphibiousData, "minecraft:movement.amphibious"> {
    /**
     * 
     * @param {MovementAmphibiousData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: MovementAmphibiousData) {
        super("minecraft:movement.amphibious", params);
    }
}