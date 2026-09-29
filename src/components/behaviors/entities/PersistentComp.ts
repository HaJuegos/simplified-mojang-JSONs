import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface PersistentData extends BPComponent {

}

export class SetPersistent extends BehaviorEntityComponentBuilder<PersistentData> {
    /**
     * 
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:persistent");
    }
}