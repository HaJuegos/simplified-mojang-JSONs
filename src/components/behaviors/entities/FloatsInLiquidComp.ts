import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface FloatsInLiquidData extends BPComponent {

}

export class SetFloatsInLiquid extends BehaviorEntityComponentBuilder<FloatsInLiquidData, "minecraft:floats_in_liquid"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:floats_in_liquid");
    }
}