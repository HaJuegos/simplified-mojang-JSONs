import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BreakBlocksData extends BPComponent {
    breakableBlocks: (string | MinecraftBlockTypes)[];
}

export class SetBreakBlocks extends BehaviorEntityComponentBuilder<BreakBlocksData> {
    /**
     * 
     * @param {BreakBlocksData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BreakBlocksData) {
        super("minecraft:break_blocks", params);
    }
}