import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface ColorData extends BPComponent {
    value?: number;
}

export class SetColor extends BehaviorEntityComponentBuilder<ColorData, "minecraft:color"> {
    /**
     * 
     * @param {ColorData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: ColorData) {
        super("minecraft:color", params);
    }
}