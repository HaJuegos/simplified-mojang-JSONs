import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface IsShakingData extends BPComponent {

}

export class SetIsShaking extends BehaviorEntityComponentBuilder<IsShakingData, "minecraft:is_shaking"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:is_shaking");
    }
}