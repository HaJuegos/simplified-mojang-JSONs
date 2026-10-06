import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface IsTamedData extends BPComponent {

}

export class SetIsTamed extends BehaviorEntityComponentBuilder<IsTamedData, "minecraft:is_tamed"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:is_tamed");
    }
}