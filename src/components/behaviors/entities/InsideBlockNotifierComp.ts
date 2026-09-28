import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface InsideBlockNotifierData extends BPComponent {
    blockList: BlockListTypes[];
}

interface BlockListTypes {
    block: BlockDataTypes;
    enteredBlockEvent?: EntityFilter;
    exitedBlockEvent?: EntityFilter;
}

interface BlockDataTypes {
    name: string | MinecraftBlockTypes;
    states?: Record<string, string>;
}

export class SetInsideBlockNotifier extends BehaviorEntityComponentBuilder<InsideBlockNotifierData> {
    /**
     * 
     * @param {InsideBlockNotifierData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: InsideBlockNotifierData) {
        super("minecraft:inside_block_notifier", params);
    }
}