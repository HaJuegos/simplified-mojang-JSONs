import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface SpawnEggInteractionData extends BPComponent {

}

export class SetSpawnEggInteraction extends BehaviorEntityComponentBuilder<SpawnEggInteractionData, "minecraft:spawn_egg_interaction"> {
    /**
     * 
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:spawn_egg_interaction");
    }
}