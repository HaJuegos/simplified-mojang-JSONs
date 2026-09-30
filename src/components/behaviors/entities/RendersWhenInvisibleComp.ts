import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface RendersWhenInvisibleData extends BPComponent {

}

export class SetRendersWhenInvisible extends BehaviorEntityComponentBuilder<RendersWhenInvisibleData> {
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