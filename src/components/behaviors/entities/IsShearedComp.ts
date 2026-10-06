import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface IsShearedData extends BPComponent {

}

export class SetIsSheared extends BehaviorEntityComponentBuilder<IsShearedData, "minecraft:is_sheared"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:is_sheared");
    }
}