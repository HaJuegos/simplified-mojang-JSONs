import { MinecraftBlockTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";

interface BehaviorJumpToBlockData extends BPComponent {
    priority: number;
    cooldownRange?: {
        min: number,
        max: number;
    };
    forbiddenBlocks?: string[] | MinecraftBlockTypes[] | TargetBlocksTypes[];
    maxVelocity?: number;
    minimumDistance?: number;
    minimumPathLength?: number;
    preferredBlocks?: string[] | MinecraftBlockTypes[] | TargetBlocksTypes[];
    preferredBlocksChance?: number;
    scaleFactor?: number;
    searchHeight?: number;
    searchWidth?: number;
}

interface TargetBlocksTypes {
    item: string | MinecraftItemTypes;
    itemTag: string;
    tags: MoLangValue;
}

export class SetBehaviorJumpToBlock extends BehaviorEntityComponentBuilder<BehaviorJumpToBlockData> {
    /**
     * 
     * @param {BehaviorJumpToBlockData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorJumpToBlockData) {
        super("minecraft:behavior.jump_to_block", params);
    }
}