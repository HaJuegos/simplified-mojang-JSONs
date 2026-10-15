import { RawMessage } from "@minecraft/server";
import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type InteractButtonData = string | boolean | RawMessage;

export class SetInteractButton extends BehaviorItemsComponentsBuilder<InteractButtonData, "minecraft:interact_button"> {
    /**
     * 
     * @param {InteractButtonData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: InteractButtonData) {
        super("minecraft:interact_button", params);
    }
}