import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";
import { MoLangValue } from "../../../types/MoLang";

interface BehaviorEatBlockData extends BPComponent {
    priority: number;
    onEat?: string | EntityFilterTrigger | EntityFilterTrigger[];
    successChance?: string | number | MoLangValue;
    timeUntilEat?: number;
    eatAndReplaceBlockPairs?: ItemEatTypes[];
}

interface ItemEatTypes {
    eatBlock: string | MinecraftItemTypes;
    replaceBlock: string | MinecraftItemTypes;
}

export class SetBehaviorEatBlock extends BehaviorEntityComponentBuilder<BehaviorEatBlockData, "minecraft:behavior.eat_block"> {
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