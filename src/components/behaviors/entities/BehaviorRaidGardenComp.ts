import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorRaidGardenData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    blocks?: (string | MinecraftBlockTypes)[];
    eatDelay?: number;
    fullDelay?: number;
    initialEatDelay?: number;
    goalRadius?: number;
    maxToEat?: number;
    searchRange?: number;
    searchHeight?: number;
}

export class SetBehaviorRaidGarden extends BehaviorEntityComponentBuilder<BehaviorRaidGardenData> {
    /**
     * 
     * @param {BehaviorRaidGardenData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRaidGardenData) {
        super("minecraft:behavior.raid_garden", params);
    }
}