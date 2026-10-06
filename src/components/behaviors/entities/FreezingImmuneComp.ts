import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface FreezingImmuneData extends BPComponent {

}

export class SetFreezingImmune extends BehaviorEntityComponentBuilder<FreezingImmuneData, "minecraft:freezing_immune"> {
    /**
     * 
     * @author HaJuegos - 04-10-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:freezing_immune");
    }
}