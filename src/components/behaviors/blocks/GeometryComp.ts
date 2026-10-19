import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { MoLangValue } from "../../../types/MoLang";

type CullingLayersVanillaTypes = "minecraft:culling_layer.leaves" | "minecraft:culling_layer.undefined" | (string & {});

type CullingShapesVanillaTypes = "minecraft:empty" | "minecraft:unit_cube" | (string & {});

interface GeometryParams {
    identifier: string;
    boneVisibility?: Record<string, string | MoLangValue | boolean | number>,
    culling?: string;
    cullingLayer?: CullingLayersVanillaTypes;
    cullingShape?: CullingShapesVanillaTypes;
    nWayVisualRotation?: {
        x: string;
        y: string;
        z: string;
    };
    uvLock?: boolean;
}

type GeometryData = string | GeometryParams;

export class SetGeometry extends BehaviorBlockComponentBuilder<GeometryData, "minecraft:geometry"> {
    /**
     * 
     * @param {GeometryData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: GeometryData) {
        super("minecraft:geometry", params);
    }
}