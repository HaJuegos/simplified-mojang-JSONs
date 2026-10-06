import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorRandomLookAroundData extends BPComponent {
    priority: number;
    angleOfViewHorizontal?: number;
    angleOfViewVertical?: number;
    lookDistance?: number;
    lookTime?: {
        min: number;
        max: number;
    };
    probability?: number;
}

export class SetBehaviorRandomLookAround extends BehaviorEntityComponentBuilder<BehaviorRandomLookAroundData, "minecraft:behavior.random_look_around"> {
    /**
     * 
     * @param {BehaviorRandomLookAroundData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRandomLookAroundData) {
        super("minecraft:behavior.random_look_around", params);
    }
}