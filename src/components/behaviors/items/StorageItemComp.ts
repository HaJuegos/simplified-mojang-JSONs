import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface StorageItemData extends BPComponent {
    allowNestedStorageItems: boolean;
    maxSlots: number;
    allowedItems: (string | MinecraftItemTypes)[];
    bannedItems: (string | MinecraftItemTypes)[];
}

export class SetStorageItem extends BehaviorItemsComponentsBuilder<StorageItemData, "minecraft:storage_item"> {
    /**
     * 
     * @param {StorageItemData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: StorageItemData) {
        super("minecraft:storage_item", params);
    }
}