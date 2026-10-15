import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type CanDestroyInCreativeData = boolean | {
    value?: boolean;
};

export class SetCanDestroyInCreative extends BehaviorItemsComponentsBuilder<CanDestroyInCreativeData, "minecraft:can_destroy_in_creative"> {
    /**
     * 
     * @param {CanDestroyInCreativeData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: CanDestroyInCreativeData) {
        super("minecraft:can_destroy_in_creative", params);
    }
}