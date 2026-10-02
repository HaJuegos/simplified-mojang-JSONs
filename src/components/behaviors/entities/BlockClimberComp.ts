import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BlockClimberData extends BPComponent {

}

export class SetBlockClimber extends BehaviorEntityComponentBuilder<BlockClimberData, "minecraft:block_climber"> {
    /**
     * 
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:block_climber");
    }
}