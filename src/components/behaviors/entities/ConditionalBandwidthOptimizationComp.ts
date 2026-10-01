import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
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

export class SetConditionalBandwidthOptimization extends BehaviorEntityComponentBuilder<ConditionalBandwidthOptimizationData> {
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