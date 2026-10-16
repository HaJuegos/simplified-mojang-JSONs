import { BehaviorBiomeComponentBulder } from "../../../builders/behaviors/biomes/BiomeCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface CreatureSpawnProbabilityData extends BPComponent {
    probability: number;
}

export class SetCreatureSpawnProbability extends BehaviorBiomeComponentBulder<CreatureSpawnProbabilityData, "minecraft:creature_spawn_probability"> {
    /**
     * 
     * @param {CreatureSpawnProbabilityData} params Parametros del componente.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (params?: CreatureSpawnProbabilityData) {
        super("minecraft:creature_spawn_probability", params);
    }
}