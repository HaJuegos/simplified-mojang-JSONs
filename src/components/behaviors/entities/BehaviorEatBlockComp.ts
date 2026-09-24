import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface BehaviorEatBlockData extends BPComponent {
    priority: number;
    onEat?: string | EntityFilterTrigger | EntityFilterTrigger[];
    successChance?: number;
    timeUntilEat?: number;
    eatAndReplaceBlockPairs?: ItemEatTypes[];
}

interface ItemEatTypes {
    eatBlock: string | MinecraftItemTypes;
    replaceBlock: string | MinecraftItemTypes;
}

export class SetBehaviorEatBlock extends BehaviorEntityComponentBuilder<BehaviorEatBlockData> {
    /**
     * 
     * @param {BehaviorEatBlockData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorEatBlockData) {
        super("minecraft:behavior.eat_block", params);
    }
}