import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface ItemHopperData extends BPComponent {

}

export class SetItemHopper extends BehaviorEntityComponentBuilder<ItemHopperData> {
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