import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorFollowParentData extends BPComponent {
    priority: number;

    speedMultiplier?: number;
}

export class SetBehaviorFollowParent extends BehaviorEntityComponentBuilder<BehaviorFollowParentData> {
    /**
     * 
     * @param {BehaviorFollowParentData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorFollowParentData) {
        super("minecraft:behavior.follow_parent", params);
    }
}