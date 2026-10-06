import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilter, EntityFilterTrigger, TargetItemsTypes } from "../../../types/EntityFilters";

interface TameableData extends BPComponent {
    probability?: number;
    tameEvent?: EntityFilterTrigger;
    tameItems?: (string | MinecraftItemTypes | TameItemTypes)[];
}

interface TameItemTypes {
    item: string | MinecraftItemTypes | TargetItemsTypes;
    resultItem: string | MinecraftItemTypes | TargetItemsTypes;
}

export class SetTameable extends BehaviorEntityComponentBuilder<TameableData, "minecraft:tameable"> {
    /**
     * 
     * @param {TameableData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: TameableData) {
        super("minecraft:tameable", params);
    }
}