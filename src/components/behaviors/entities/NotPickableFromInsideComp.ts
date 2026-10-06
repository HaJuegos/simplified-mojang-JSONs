import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface NotPickableFromInsideData extends BPComponent {

}

export class SetNotPickableFromInside extends BehaviorEntityComponentBuilder<NotPickableFromInsideData, "minecraft:not_pickable_from_inside"> {
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