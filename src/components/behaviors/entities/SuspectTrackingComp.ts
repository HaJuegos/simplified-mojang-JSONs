import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface SuspectTrackingData extends BPComponent {

}

export class SetSuspectTracking extends BehaviorEntityComponentBuilder<SuspectTrackingData, "minecraft:suspect_tracking"> {
    /**
     * 
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:suspect_tracking");
    }
}