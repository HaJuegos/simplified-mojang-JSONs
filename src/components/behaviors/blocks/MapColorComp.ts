import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type TintsVanillaTypes = "birch_foliage" | "default_foliage" | "dry_foliage" | "evergreen_foliage" | "grass" | "water" | (string & {});

type MapColorData = string | {

    color: string;
    tintMethod: TintsVanillaTypes;
};

export class SetMapColor extends BehaviorBlockComponentBuilder<MapColorData, "minecraft:map_color"> {
    /**
     * 
     * @param {MapColorData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: MapColorData) {
        super("minecraft:map_color", params);
    }
}