import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorRiseToLiquidLevelData extends BPComponent {
    priority: number;
    liquidYOffset?: number;
    riseDelta?: number;
    sinkDelta?: number;
}

export class SetBehaviorRiseToLiquidLevel extends BehaviorEntityComponentBuilder<BehaviorRiseToLiquidLevelData> {
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