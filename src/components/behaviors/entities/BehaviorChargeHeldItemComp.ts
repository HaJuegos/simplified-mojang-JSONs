import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";
import { TargetItemsTypes } from "../../../types/EntityFilters";

interface BehaviorChargeHeldItemData extends BPComponent {
    priority: number;
    items?: TargetItemsTypes[];
}

export class SetBehaviorChargeHeldItem extends BehaviorEntityComponentBuilder<BehaviorChargeHeldItemData> {
    /**
     * 
     * @param {BehaviorChargeHeldItemData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorChargeHeldItemData) {
        super("minecraft:behavior.charge_held_item", params);
    }
}