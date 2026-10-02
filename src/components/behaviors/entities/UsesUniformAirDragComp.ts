import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface UsesUniformAirDragData extends BPComponent {

}

export class SetUsesUniformAirDrag extends BehaviorEntityComponentBuilder<UsesUniformAirDragData, "minecraft:uses_uniform_air_drag"> {
    /**
     * 
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:uses_uniform_air_drag");
    }
}