import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface CanJoinRaidData extends BPComponent {

}

export class SetCanJoinRaid extends BehaviorEntityComponentBuilder<CanJoinRaidData, "minecraft:can_join_raid"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:can_join_raid");
    }
}