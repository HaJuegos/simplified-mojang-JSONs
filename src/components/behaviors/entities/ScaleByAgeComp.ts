import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface ScaleByAgeData extends BPComponent {
    endScale?: number;
    startScale?: number;
}

export class SetScaleByAge extends BehaviorEntityComponentBuilder<ScaleByAgeData, "minecraft:scale_by_age"> {
    /**
     * 
     * @param {ScaleByAgeData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: ScaleByAgeData) {
        super("minecraft:scale_by_age", params);
    }
}