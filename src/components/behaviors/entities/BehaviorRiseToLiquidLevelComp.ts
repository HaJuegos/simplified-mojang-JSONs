import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorRiseToLiquidLevelData extends BPComponent {
    priority: number;
    liquidYOffset?: number;
    riseDelta?: number;
    sinkDelta?: number;
}

export class SetBehaviorRiseToLiquidLevel extends BehaviorEntityComponentBuilder<BehaviorRiseToLiquidLevelData, "minecraft:behavior.rise_to_liquid_level"> {
    /**
     * 
     * @param {BehaviorRiseToLiquidLevelData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRiseToLiquidLevelData) {
        super("minecraft:behavior.rise_to_liquid_level", params);
    }
}