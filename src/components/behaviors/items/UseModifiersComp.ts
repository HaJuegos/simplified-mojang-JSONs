import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface UseModifiersData extends BPComponent {
    emitVibrations?: boolean;
    movementModifier: number;
    startSound?: string;
    startUsing?: "always" | "if_first";
    useDuration: number;
}

export class SetUseModifiers extends BehaviorItemsComponentsBuilder<UseModifiersData, "minecraft:use_modifiers"> {
    /**
     * 
     * @param {UseModifiersData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: UseModifiersData) {
        super("minecraft:use_modifiers", params);
    }
}