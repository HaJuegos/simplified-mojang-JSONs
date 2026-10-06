import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface PushableByBlockData extends BPComponent {

}

export class SetPushableByBlock extends BehaviorEntityComponentBuilder<PushableByBlockData, "minecraft:pushable_by_block"> {
    /**
     * 
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:pushable_by_block");
    }
}