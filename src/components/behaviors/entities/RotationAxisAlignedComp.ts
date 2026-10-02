import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface RotationAxisAlignedData extends BPComponent {

}

export class SetRotationAxisAligned extends BehaviorEntityComponentBuilder<RotationAxisAlignedData, "minecraft:rotation_axis_aligned"> {
    /**
     * 
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:rotation_axis_aligned");
    }
}