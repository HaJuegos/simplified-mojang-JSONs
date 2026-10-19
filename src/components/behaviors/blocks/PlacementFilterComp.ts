import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";

type BlockDataTypes = {
    name: string | MinecraftBlockTypes;
    states?: Record<string, string | boolean | number>;
    tags?: never;
} | {
    name?: never;
    states?: Record<string, string | boolean | number>;
    tags: string | MoLangValue;
};

type FacesVanillaTypes = "down" | "up" | "north" | "south" | "west" | "east";

interface ConditionsListParams {
    allowedFaces?: FacesVanillaTypes[];
    blockFilter?: (string | MinecraftBlockTypes | BlockDataTypes)[];
}

interface PlacementFilterData extends BPComponent {
    conditions: ConditionsListParams[];
}

export class SetPlacementFilter extends BehaviorBlockComponentBuilder<PlacementFilterData, "minecraft:placement_filter"> {
    /**
     * 
     * @param {PlacementFilterData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: PlacementFilterData) {
        super("minecraft:placement_filter", params);
    }
}