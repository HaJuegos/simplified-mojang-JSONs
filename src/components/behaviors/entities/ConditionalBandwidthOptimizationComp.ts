import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface ConditionalBandwidthOptimizationData extends BPComponent {
    conditionalValues?: ConditionsOfValues[];
    defaultValues?: DefaultValuesConditional;
}

interface ConditionsOfValues extends DefaultValuesConditional {
    conditionalValues: EntityFilter[];
}

interface DefaultValuesConditional {
    maxDroppedTicks?: number;
    maxOptimizedDistance?: number;
    useMotionPredictionHints?: boolean;
}

export class SetConditionalBandwidthOptimization extends BehaviorEntityComponentBuilder<ConditionalBandwidthOptimizationData, "minecraft:conditional_bandwidth_optimization"> {
    /**
     * 
     * @param {ConditionalBandwidthOptimizationData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: ConditionalBandwidthOptimizationData) {
        super("minecraft:conditional_bandwidth_optimization", params);
    }
}