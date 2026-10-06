import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { TargetItemsTypes } from "../../../types/EntityFilters";

interface BehaviorBegData extends BPComponent {
    priority: number;
    items?: (string | MinecraftItemTypes | TargetItemsTypes)[];
    lookDistance?: number;
    lookTime?: {
        min: number;
        max: number;
    };
}

export class SetBehaviorBeg extends BehaviorEntityComponentBuilder<BehaviorBegData, "minecraft:behavior.beg"> {
    /**
     * 
     * @param {BehaviorBegData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorBegData) {
        super("minecraft:behavior.beg", params);
    }
}