import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface ShareablesData extends BPComponent {
    allItems?: boolean;
    allItemsMaxAmount?: number;
    allItemsSurplusAmount?: number;
    allItemsWantAmount?: number;
    items?: ItemsListTypes[];
    singularPickup?: boolean;
}

interface ItemsListTypes {
    admire?: boolean;
    barter?: boolean;
    consumeItem?: boolean;
    craftInto?: string | MinecraftItemTypes;
    item?: string | MinecraftItemTypes;
    itemAux?: number;
    maxAmount?: number;
    pickupLimit?: number;
    pickupOnly?: boolean;
    priority?: number;
    storedInInventory?: boolean;
    surplusAmount?: number;
    wantAmount?: number;
}

export class SetShareables extends BehaviorEntityComponentBuilder<ShareablesData, "minecraft:shareables"> {
    /**
     * 
     * @param {ShareablesData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: ShareablesData) {
        super("minecraft:shareables", params);
    }
}