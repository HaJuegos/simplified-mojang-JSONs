import { BehaviorBiomeComponentBulder } from "../../../builders/behaviors/biomes/BiomeCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type VillageTagVanillsTypes = "desert" | "ice" | "savanna" | "taiga" | "default";

interface VillageTypeData extends BPComponent {
    type: VillageTagVanillsTypes;
}

export class SetVillageType extends BehaviorBiomeComponentBulder<VillageTypeData, "minecraft:village_type"> {
    /**
     * 
     * @param {VillageTypeData} params Parametros del componente.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (params: VillageTypeData) {
        super("minecraft:village_type", params);
    }
}