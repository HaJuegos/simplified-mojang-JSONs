import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface ScaleByAgeData extends BPComponent {
    endScale?: number;
    startScale?: number;
}

export class SetScaleByAge extends BehaviorEntityComponentBuilder<ScaleByAgeData> {
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