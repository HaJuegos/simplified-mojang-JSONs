import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface IsCollidableData extends BPComponent {

}

export class SetIsCollidable extends BehaviorEntityComponentBuilder<IsCollidableData, "minecraft:is_collidable"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:is_collidable");
    }
}