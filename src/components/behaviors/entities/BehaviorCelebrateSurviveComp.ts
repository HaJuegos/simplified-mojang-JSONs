import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFiltersTarget } from "../../../types/EntityFilters";

interface BehaviorCelebrateSurviveData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    fireworksInterval?: {
        min: number,
        max: number;
    };
    duration?: number;
    onCelebrationEndEvent?: string | EntityFiltersTarget;
}

export class SetBehaviorCelebrateSurvive extends BehaviorEntityComponentBuilder<BehaviorCelebrateSurviveData> {
    /**
     * 
     * @param {BehaviorCelebrateSurviveData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorCelebrateSurviveData) {
        super("minecraft:behavior.celebrate_survive", params);
    }
}