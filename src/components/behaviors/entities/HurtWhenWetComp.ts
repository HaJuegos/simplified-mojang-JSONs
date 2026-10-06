import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface HurtWhenWetData extends BPComponent {

}

export class SetHurtWhenWet extends BehaviorEntityComponentBuilder<HurtWhenWetData, "minecraft:hurt_when_wet"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:hurt_when_wet");
    }
}