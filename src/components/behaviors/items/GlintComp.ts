import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type GlintData = true | {
    value: boolean;
};

export class SetGlint extends BehaviorItemsComponentsBuilder<GlintData, "minecraft:glint"> {
    /**
     * 
     * @param {GlintData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: GlintData) {
        super("minecraft:glint", params);
    }
}