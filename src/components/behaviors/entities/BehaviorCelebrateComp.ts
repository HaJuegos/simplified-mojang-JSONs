import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFiltersTarget } from "../../../types/EntityFilters";

interface BehaviorCelebrateData extends BPComponent {
    priority: number;
    celebrationSound?: string;
    duration?: number;
    jumpInterval?: {
        min: number,
        max: number;
    };
    onCelebrationEndEvent?: string | EntityFiltersTarget;
    soundInterval?: {
        min: number,
        max: number;
    };
}

export class SetBehaviorCelebrate extends BehaviorEntityComponentBuilder<BehaviorCelebrateData> {
    /**
     * 
     * @param {BehaviorCelebrateData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorCelebrateData) {
        super("minecraft:behavior.celebrate", params);
    }
}