import { RawMessage } from "@minecraft/server";
import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface DisplayNameData extends BPComponent {
    value: string | RawMessage;
}

export class SetDisplayName extends BehaviorItemsComponentsBuilder<DisplayNameData, "minecraft:display_name"> {
    /**
     * 
     * @param {DisplayNameData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: DisplayNameData) {
        super("minecraft:display_name", params);
    }
}