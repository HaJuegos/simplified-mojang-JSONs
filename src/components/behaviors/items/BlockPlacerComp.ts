import { MinecraftBlockTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";

interface BlockPlacerData extends BPComponent {
    block: string | MinecraftItemTypes;
    alignedPlacement?: boolean;
    replaceBlockItem?: boolean;
    useOn?: (string | MinecraftBlockTypes | BlockDataTypes)[];
}

type BlockDataTypes = {
    name: string | MinecraftBlockTypes;
    states?: Record<string, string | boolean | number>;
    tags?: never;
} | {
    name?: never;
    states?: Record<string, string | boolean | number>;
    tags: string | MoLangValue;
};

export class SetBlockPlacer extends BehaviorItemsComponentsBuilder<BlockPlacerData, "minecraft:block_placer"> {
    /**
     * 
     * @param {BlockPlacerData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: BlockPlacerData) {
        super("minecraft:block_placer", params);
    }
}