import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface FlowerPottableData extends BPComponent {

}

export class SetFlowerPottable extends BehaviorBlockComponentBuilder<FlowerPottableData, "minecraft:flower_pottable"> {
    /**
     * 
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:flower_pottable");
    }
}