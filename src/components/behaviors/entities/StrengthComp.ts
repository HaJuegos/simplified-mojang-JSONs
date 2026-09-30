import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface StrengthData extends BPComponent {
    max?: number;
    value?: number;
}

export class SetStrength extends BehaviorEntityComponentBuilder<StrengthData> {
    /**
     * 
     * @param {StrengthData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: StrengthData) {
        super("minecraft:strength", params);
    }
}