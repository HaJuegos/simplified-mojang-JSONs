import { BehaviorDimensionComponentBuilder } from "../../../builders/behaviors/dimensions/DimensionCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface DimensionHeightData extends BPComponent {
    minY: number;
    heightRange: number;
}

export class SetDimensionHeight extends BehaviorDimensionComponentBuilder<DimensionHeightData, "minecraft:dimension_height"> {
    /**
     * 
     * @param {DimensionHeightData} params Parametros del componente.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (params: DimensionHeightData) {
        super("minecraft:dimension_height", params);
    }
}