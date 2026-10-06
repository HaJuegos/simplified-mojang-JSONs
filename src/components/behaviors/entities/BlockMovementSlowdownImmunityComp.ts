import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { BlockTagsTypes } from "../../../types/EntityFilters";

interface BlockMovementSlowdownImmunityData extends BPComponent {
    blocks: (string | MinecraftBlockTypes | BlockTagsTypes)[];
}

export class SetBlockMovementSlowdownImmunity extends BehaviorEntityComponentBuilder<BlockMovementSlowdownImmunityData, "minecraft:block_movement_slowdown_immunity"> {
    /**
     * 
     * @param {BlockMovementSlowdownImmunityData} params Parametros del componente.
     * @author HaJuegos - 04-10-2026
     * @constructor
     * @public
     */
    public constructor (params: BlockMovementSlowdownImmunityData) {
        super("minecraft:block_movement_slowdown_immunity", params);
    }
}