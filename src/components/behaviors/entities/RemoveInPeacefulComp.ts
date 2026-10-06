import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface RemoveInPeacefulData extends BPComponent {

}

export class SetRemoveInPeaceful extends BehaviorEntityComponentBuilder<RemoveInPeacefulData, "minecraft:remove_in_peaceful"> {
    /**
     * 
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:remove_in_peaceful");
    }
}