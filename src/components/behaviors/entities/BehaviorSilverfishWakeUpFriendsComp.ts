import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorSilverfishWakeUpFriendsData extends BPComponent {
    priority: number;
}

export class SetBehaviorSilverfishWakeUpFriends extends BehaviorEntityComponentBuilder<BehaviorSilverfishWakeUpFriendsData, "minecraft:behavior.silverfish_wake_up_friends"> {
    /**
     * 
     * @param {BehaviorSilverfishWakeUpFriendsData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSilverfishWakeUpFriendsData) {
        super("minecraft:behavior.silverfish_wake_up_friends", params);
    }
}