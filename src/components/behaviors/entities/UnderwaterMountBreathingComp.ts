import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface UnderwaterMountBreathingData extends BPComponent {

}

export class SetUnderwaterMountBreathing extends BehaviorEntityComponentBuilder<UnderwaterMountBreathingData, "minecraft:underwater_mount_breathing"> {
    /**
     * 
     * @author HaJuegos - 05-10-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:underwater_mount_breathing");
    }
}