import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface ColorTwoData extends BPComponent {
    value?: number;
}

export class SetColorTwo extends BehaviorEntityComponentBuilder<ColorTwoData, "minecraft:color2"> {
    /**
     * 
     * @param {ColorTwoData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: ColorTwoData) {
        super("minecraft:color2", params);
    }
}