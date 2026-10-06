import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface ItemHopperData extends BPComponent {

}

export class SetItemHopper extends BehaviorEntityComponentBuilder<ItemHopperData, "minecraft:item_hopper"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:item_hopper");
    }
}