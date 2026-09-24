import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorRandomHoverData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    hoverHeight?: {
        min: number;
        max: number;
    };
    interval?: number;
    xzDist?: number;
    yDist?: number;
    yOffset?: number;
}

export class SetBehaviorRandomHover extends BehaviorEntityComponentBuilder<BehaviorRandomHoverData> {
    /**
     * 
     * @param {BehaviorRandomHoverData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRandomHoverData) {
        super("minecraft:behavior.random_hover", params);
    }
}