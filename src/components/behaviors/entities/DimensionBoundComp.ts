import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface DimensionBoundData extends BPComponent {

}

export class SetDimensionBound extends BehaviorEntityComponentBuilder<DimensionBoundData> {
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