import { BehaviorDimensionComponentBuilder } from "../../../builders/behaviors/dimensions/DimensionCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface DefaultBiomeData extends BPComponent {
    biome: string;
}

export class SetDefaultBiome extends BehaviorDimensionComponentBuilder<DefaultBiomeData, "minecraft:default_biome"> {
    /**
     * 
     * @param {DefaultBiomeData} params Parametros del componente.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (params: DefaultBiomeData) {
        super("minecraft:default_biome", params);
    }
}