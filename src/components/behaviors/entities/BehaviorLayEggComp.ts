import { MinecraftBlockTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";
import { EntityFilter, TargetItemsTypes } from "../../../types/EntityFilters";

interface BehaviorLayEggData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    allowLayingFromBelow?: boolean;
    eggType?: string | TargetItemsTypes;
    goalRadius?: number;
    layEggSound?: string;
    laySeconds?: number;
    onLay?: string | EntityFilter | EntityFilter[];
    searchHeight?: number;
    searchRange?: number;
    targetBlocks?: (string | MinecraftBlockTypes)[];
    targetMaterialsAboveBlock?: ("Air" | "Any" | "Lava" | "Water")[];
    useDefaultAnimation?: boolean;
}

export class SetBehaviorLayEgg extends BehaviorEntityComponentBuilder<BehaviorLayEggData> {
    /**
     * 
     * @param {BehaviorLayEggData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorLayEggData) {
        super("minecraft:behavior.lay_egg", params);
    }
}