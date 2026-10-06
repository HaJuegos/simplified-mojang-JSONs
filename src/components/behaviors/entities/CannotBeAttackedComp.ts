import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface CannotBeAttackedData extends BPComponent {

}

export class SetCannotBeAttacked extends BehaviorEntityComponentBuilder<CannotBeAttackedData, "minecraft:cannot_be_attacked"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:cannot_be_attacked");
    }
}