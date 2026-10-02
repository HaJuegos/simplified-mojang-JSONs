import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface IsBabyData extends BPComponent {

}

export class SetIsBaby extends BehaviorEntityComponentBuilder<IsBabyData, "minecraft:is_baby"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:is_baby");
    }
}