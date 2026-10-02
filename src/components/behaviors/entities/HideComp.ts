import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface HideData extends BPComponent {
    restrictionRadius?: number;
    homeBlockList?: (string | MinecraftBlockTypes)[];
    restrictionType?: "none" | "random_movement" | "all_movement";
}

export class SetHide extends BehaviorEntityComponentBuilder<HideData, "minecraft:hide"> {
    /**
     * 
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor () {
        super("minecraft:hide");
    }
}