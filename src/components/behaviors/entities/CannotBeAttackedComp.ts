import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface CannotBeAttackedData extends BPComponent {

}

export class SetCannotBeAttacked extends BehaviorEntityComponentBuilder<CannotBeAttackedData> {
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