import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface PreferredPathData extends BPComponent {
    defaultBlockCost?: number;
    jumpCost?: number;
    maxFallBlocks?: number;
    preferredPathBlocks?: PathBlocksTypes[];
}

interface PathBlocksTypes {
    blocks: (string | MinecraftBlockTypes)[];
    cost: number;
}

export class SetPreferredPath extends BehaviorEntityComponentBuilder<PreferredPathData, "minecraft:preferred_path"> {
    /**
     * 
     * @param {PreferredPathData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: PreferredPathData) {
        super("minecraft:preferred_path", params);
    }
}