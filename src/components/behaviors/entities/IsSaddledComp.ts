import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface IsSaddledData extends BPComponent {

}

export class SetIsSaddled extends BehaviorEntityComponentBuilder<IsSaddledData, "minecraft:is_saddled"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:is_saddled");
    }
}