import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface IsChestedData extends BPComponent {

}

export class SetIsChested extends BehaviorEntityComponentBuilder<IsChestedData, "minecraft:is_chested"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:is_chested");
    }
}