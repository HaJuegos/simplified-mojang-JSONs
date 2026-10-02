import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface VariantData extends BPComponent {
    value: number;
}

export class SetVariant extends BehaviorEntityComponentBuilder<VariantData, "minecraft:variant"> {
    /**
     * 
     * @param {VariantData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: VariantData) {
        super("minecraft:variant", params);
    }
}