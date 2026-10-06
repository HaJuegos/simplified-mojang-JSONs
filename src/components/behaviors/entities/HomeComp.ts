import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface HomeData extends BPComponent {
    restrictionRadius?: number;
    homeBlockList?: (string | MinecraftBlockTypes)[];
    restrictionType?: "none" | "all_movement" | "random_movement";
}

export class SetHome extends BehaviorEntityComponentBuilder<HomeData, "minecraft:home"> {
    /**
     * 
     * @param {HomeData} params Parametros del componente.
     * @author HaJuegos - 03-10-2026
     * @constructor
     * @public
     */
    public constructor (params?: HomeData) {
        super("minecraft:home", params);
    }
}