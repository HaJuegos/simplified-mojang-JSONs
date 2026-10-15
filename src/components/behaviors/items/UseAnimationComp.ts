import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type AnimationsVanillaTypes = "eat" | "drink" | "bow" | "block" | "camera" | "crossbow" | "none" | "brush" | "spear" | "spyglass";

type UseAnimationData = AnimationsVanillaTypes | {
    value: AnimationsVanillaTypes;
};

export class SetUseAnimation extends BehaviorItemsComponentsBuilder<UseAnimationData, "minecraft:use_animation"> {
    /**
     * 
     * @param {UseAnimationData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: UseAnimationData) {
        super("minecraft:use_animation", params);
    }
}