import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorExploreOutskirtsData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    distFromBoundary?: [number, number];
    exploreDist?: number;
    maxTravelTime?: number;
    maxWaitTime?: number;
    minDistFromTarget?: number;
    minPerimeter?: number;
    minWaitTime?: number;
    nextXz?: number;
    nextY?: number;
    timerRatio?: number;
}

export class SetBehaviorExploreOutskirts extends BehaviorEntityComponentBuilder<BehaviorExploreOutskirtsData> {
    /**
     * 
     * @param {BehaviorExploreOutskirtsData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorExploreOutskirtsData) {
        super("minecraft:behavior.explore_outskirts", params);
    }
}