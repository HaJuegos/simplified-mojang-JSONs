import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface ColorTwoData extends BPComponent {
    value?: number;
}

export class SetColorTwo extends BehaviorEntityComponentBuilder<ColorTwoData> {
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