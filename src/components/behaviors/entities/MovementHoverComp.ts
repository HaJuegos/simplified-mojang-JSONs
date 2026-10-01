import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface MovementHoverData extends BPComponent {
    jumpDelay?: [number, number];
    maxTurn?: number;
}

export class SetMovementHover extends BehaviorEntityComponentBuilder<MovementHoverData> {
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