import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface FollowRangeData extends BPComponent {
    max?: number,
    min?: number,
    value?: number | [number, number];
}

export class SetFollowRange extends BehaviorEntityComponentBuilder<FollowRangeData, "minecraft:follow_range"> {
    /**
     * 
     * @param {FollowRangeData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: FollowRangeData) {
        super("minecraft:follow_range", params);
    }
}