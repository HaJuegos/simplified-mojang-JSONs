import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface ScaleData extends BPComponent {
    value?: number;
}

export class SetScale extends BehaviorEntityComponentBuilder<ScaleData> {
    /**
     * 
     * @param {ScaleData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: ScaleData) {
        super("minecraft:scale", params);
    }
}