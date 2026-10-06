import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface IsStunnedData extends BPComponent {

}

export class SetIsStunned extends BehaviorEntityComponentBuilder<IsStunnedData, "minecraft:is_stunned"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:is_stunned");
    }
}