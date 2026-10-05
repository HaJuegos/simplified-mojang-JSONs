import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface NotPickableFromInsideCompData extends BPComponent {

}

export class SetNotPickableFromInsideComp extends BehaviorEntityComponentBuilder<NotPickableFromInsideCompData, "minecraft:not_pickable_from_inside"> {
    /**
     * 
     * @author HaJuegos - 04-10-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:not_pickable_from_inside");
    }
}