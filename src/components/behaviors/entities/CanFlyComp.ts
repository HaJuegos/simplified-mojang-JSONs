import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface CanFlyData extends BPComponent {

}

export class SetCanFly extends BehaviorEntityComponentBuilder<CanFlyData> {
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