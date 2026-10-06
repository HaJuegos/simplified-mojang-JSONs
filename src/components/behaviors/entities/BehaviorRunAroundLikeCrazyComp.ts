import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorRunAroundLikeCrazyData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
}

export class SetBehaviorRunAroundLikeCrazy extends BehaviorEntityComponentBuilder<BehaviorRunAroundLikeCrazyData, "minecraft:behavior.run_around_like_crazy"> {
    /**
     * 
     * @param {BehaviorRunAroundLikeCrazyData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRunAroundLikeCrazyData) {
        super("minecraft:behavior.run_around_like_crazy", params);
    }
}