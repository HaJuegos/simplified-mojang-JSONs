import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface MarkVariantData extends BPComponent {
    value: number;
}

export class SetMarkVariant extends BehaviorEntityComponentBuilder<MarkVariantData, "minecraft:mark_variant"> {
    /**
     * 
     * @param {MarkVariantData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: MarkVariantData) {
        super("minecraft:mark_variant", params);
    }
}