import { BehaviorDimensionComponentBuilder } from "../../../builders/behaviors/dimensions/DimensionCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface GenerationData extends BPComponent {
    generatorType: "void";
}

export class SetGeneration extends BehaviorDimensionComponentBuilder<GenerationData, "minecraft:generation"> {
    /**
     * 
     * @param {GenerationData} params Parametros del componente.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (params: GenerationData) {
        super("minecraft:generation", params);
    }
}