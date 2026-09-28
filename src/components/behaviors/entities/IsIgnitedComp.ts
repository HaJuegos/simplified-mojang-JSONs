import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface IsIgnitedData extends BPComponent {

}

export class SetIsIgnited extends BehaviorEntityComponentBuilder<IsIgnitedData> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:is_ignited");
    }
}