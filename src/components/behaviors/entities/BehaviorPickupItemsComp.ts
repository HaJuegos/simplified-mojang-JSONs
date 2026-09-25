import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";
import { EntityFilter, TargetItemsTypes } from "../../../types/EntityFilters";

interface BehaviorPickupItemsData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    canPickupAnyItem?: boolean;
    canPickupToHandOrEquipment?: boolean;
    cooldownAfterBeingAttacked?: number;
    excludedItems?: (string | TargetItemsTypes)[];
    goalRadius?: number;
    maxDist?: number;
    searchHeight?: number;
    stopIfHoldingItem?: boolean;
    pickupBasedOnChance?: boolean;
    pickupSameItemsAsInHand?: boolean;
    trackTarget?: boolean;
    onPickupItemStart?: string | EntityFilter | EntityFilter[];
    onPickupItemEnd?: string | EntityFilter | EntityFilter[];
}

export class SetBehaviorPickupItems extends BehaviorEntityComponentBuilder<BehaviorPickupItemsData> {
    /**
     * 
     * @param {BehaviorPickupItemsData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorPickupItemsData) {
        super("minecraft:behavior.pickup_items", params);
    }
}