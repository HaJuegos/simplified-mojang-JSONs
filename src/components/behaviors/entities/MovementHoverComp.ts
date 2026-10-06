import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface MovementHoverData extends BPComponent {
    jumpDelay?: [number, number];
    maxTurn?: number;
}

export class SetMovementHover extends BehaviorEntityComponentBuilder<MovementHoverData, "minecraft:movement.hover"> {
    /**
     * 
     * @param {MovementHoverData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: MovementHoverData) {
        super("minecraft:movement.hover", params);
    }
}