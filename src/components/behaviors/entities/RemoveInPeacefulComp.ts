import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface RemoveInPeacefulData extends BPComponent {

}

export class SetRemoveInPeaceful extends BehaviorEntityComponentBuilder<RemoveInPeacefulData> {
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