import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface IsHiddenWhenInvisibleData extends BPComponent {
    
}

export class SetIsHiddenWhenInvisible extends BehaviorEntityComponentBuilder<IsHiddenWhenInvisibleData, "minecraft:is_hidden_when_invisible"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:is_hidden_when_invisible");
    }
}