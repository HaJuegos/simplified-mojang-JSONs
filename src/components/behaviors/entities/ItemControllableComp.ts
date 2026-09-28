import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface ItemControllableData extends BPComponent {
    controlItems?: (string | MinecraftItemTypes)[];
}

export class SetItemControllable extends BehaviorEntityComponentBuilder<ItemControllableData> {
    /**
     * 
     * @param {ItemControllableData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: ItemControllableData) {
        super("minecraft:item_controllable", params);
    }
}