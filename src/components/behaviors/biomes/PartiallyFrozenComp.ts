import { BehaviorBiomeComponentBulder } from "../../../builders/behaviors/biomes/BiomeCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface PartiallyFrozenData extends BPComponent { }

export class SetPartiallyFrozen extends BehaviorBiomeComponentBulder<PartiallyFrozenData, "minecraft:partially_frozen"> {
    /**
     * 
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:partially_frozen");
    }
}