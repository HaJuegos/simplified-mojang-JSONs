import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface PersistentData extends BPComponent {

}

export class SetPersistent extends BehaviorEntityComponentBuilder<PersistentData, "minecraft:persistent"> {
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