import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorMoveToLiquidData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    goalRadius?: number;
    searchCount?: number;
    searchHeight?: number;
    searchRange?: number;
    materialType?: "Air" | "Any" | "Lava" | "Water";
}

export class SetBehaviorMoveToLiquid extends BehaviorEntityComponentBuilder<BehaviorMoveToLiquidData, "minecraft:behavior.move_to_liquid"> {
    /**
     * 
     * @param {BehaviorMoveToLiquidData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMoveToLiquidData) {
        super("minecraft:behavior.move_to_liquid", params);
    }
}