import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorFollowParentData extends BPComponent {
    priority: number;

    speedMultiplier?: number;
}

export class SetBehaviorFollowParent extends BehaviorEntityComponentBuilder<BehaviorFollowParentData, "minecraft:behavior.follow_parent"> {
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