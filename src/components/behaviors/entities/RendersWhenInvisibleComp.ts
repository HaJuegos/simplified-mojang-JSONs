import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface RendersWhenInvisibleData extends BPComponent {

}

export class SetRendersWhenInvisible extends BehaviorEntityComponentBuilder<RendersWhenInvisibleData, "minecraft:renders_when_invisible"> {
    /**
     * 
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:renders_when_invisible");
    }
}