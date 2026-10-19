import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type LidquidFlowingTypes = "up" | "down" | "north" | "south" | "east" | "west" | "side" | "all";

type LiquidTouchesTypes = "blocking" | "broken" | "no_reaction" | "popped";

interface DetectionRulesParams {
    liquidType: "water";
    canContainLiquid: boolean;
    onLiquidTouches?: LiquidTouchesTypes;
    stopsLiquidFlowingFromDirection?: LidquidFlowingTypes[];
    useLiquidClipping?: boolean;
}

interface LiquidDetectionData extends BPComponent {
    detectionRules: DetectionRulesParams[];
}

export class SetLiquidDetection extends BehaviorBlockComponentBuilder<LiquidDetectionData, "minecraft:liquid_detection"> {
    /**
     * 
     * @param {LiquidDetectionData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: LiquidDetectionData) {
        super("minecraft:liquid_detection", params);
    }
}