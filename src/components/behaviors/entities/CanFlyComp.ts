import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface CanFlyData extends BPComponent {

}

export class SetCanFly extends BehaviorEntityComponentBuilder<CanFlyData, "minecraft:can_fly"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:can_fly");
    }
}