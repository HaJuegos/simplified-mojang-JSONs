import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorRandomLookAroundAndSitData extends BPComponent {
    priority: number;
    continueIfLeashed?: boolean;
    continueSittingOnReload?: boolean;
    maxAngleOfViewHorizontal?: number;
    maxLookCount?: number;
    maxLookTime?: number;
    minAngleOfViewHorizontal?: number;
    minLookCount?: number;
    minLookTime?: number;
    probability?: number;
    randomLookAroundCooldown?: number;
}

export class SetBehaviorRandomLookAroundAndSit extends BehaviorEntityComponentBuilder<BehaviorRandomLookAroundAndSitData> {
    /**
     * 
     * @param {BehaviorRandomLookAroundAndSitData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRandomLookAroundAndSitData) {
        super("minecraft:behavior.random_look_around_and_sit", params);
    }
}