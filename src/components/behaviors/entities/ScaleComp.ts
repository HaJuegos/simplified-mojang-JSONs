import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface ScaleData extends BPComponent {
    value?: number;
}

export class SetScale extends BehaviorEntityComponentBuilder<ScaleData, "minecraft:scale"> {
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