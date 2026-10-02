import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter, EntityFilterTrigger, TargetItemsTypes } from "../../../types/EntityFilters";

interface BreedableData extends BPComponent {
    allowSitting?: boolean;
    breedCooldown?: number;
    breedItems?: TargetItemsTypes | BreedItemsTypes[];
    breedsWith?: BreedsWithTypes | BreedsWithTypes[];
    causesPregnancy?: boolean;
    environmentRequirements?: EnvRequirementsTypes | EnvRequirementsTypes[];
    extraBabyChance?: number;
    loveFilters?: EntityFilter | EntityFilter[];
    requireFullHealth?: boolean;
    requireTame?: boolean;
}

interface BreedItemsTypes {
    item: string | TargetItemsTypes;
    resultItem: string | TargetItemsTypes;
}

interface BreedsWithTypes {
    babyType: string;
    breedEvent: EntityFilterTrigger;
    mateType: string;
}

interface EnvRequirementsTypes {
    blocks: string | MinecraftBlockTypes | (string | MinecraftBlockTypes)[];
    count: number;
    radius: number;
}

export class SetBreedable extends BehaviorEntityComponentBuilder<BreedableData, "minecraft:breedable"> {
    /**
     * 
     * @param {BreedableData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BreedableData) {
        super("minecraft:breedable", params);
    }
}