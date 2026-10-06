import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface DimensionBoundData extends BPComponent {

}

export class SetDimensionBound extends BehaviorEntityComponentBuilder<DimensionBoundData, "minecraft:dimension_bound"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:dimension_bound");
    }
}