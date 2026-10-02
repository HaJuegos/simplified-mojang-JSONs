import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface FireImmuneData extends BPComponent {

}

export class SetFireImmune extends BehaviorEntityComponentBuilder<FireImmuneData, "minecraft:fire_immune"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:fire_immune");
    }
}