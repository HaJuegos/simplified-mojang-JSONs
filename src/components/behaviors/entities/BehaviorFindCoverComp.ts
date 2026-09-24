import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorFindCoverData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    cooldownTime?: number;
}

export class SetBehaviorFindCover extends BehaviorEntityComponentBuilder<BehaviorFindCoverData> {
    /**
     * 
     * @param {BehaviorFindCoverData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorFindCoverData) {
        super("minecraft:behavior.find_cover", params);
    }
}