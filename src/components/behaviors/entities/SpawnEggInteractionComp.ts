import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface SpawnEggInteractionData extends BPComponent {

}

export class SetSpawnEggInteraction extends BehaviorEntityComponentBuilder<SpawnEggInteractionData> {
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