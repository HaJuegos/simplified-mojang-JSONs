import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface CanStandOnPowderSnowData extends BPComponent {

}

export class SetCanStandOnPowderSnow extends BehaviorEntityComponentBuilder<CanStandOnPowderSnowData, "minecraft:can_stand_on_powder_snow"> {
    /**
     * 
     * @author HaJuegos - CURRENT_DAY-10-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:can_stand_on_powder_snow");
    }
}