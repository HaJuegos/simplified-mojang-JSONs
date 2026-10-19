import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
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

type TintsVanillaTypes = "birch_foliage" | "default_foliage" | "dry_foliage" | "evergreen_foliage" | "grass" | "water" | (string & {});

type RenderMehodsList = "alpha_test" | "alpha_test_single_sided" | "blend" | "double_sided" | "opaque";

interface MaterialParams {
    alphaMaskedTint?: boolean;
    ambientOcclusion?: number;
    faceDimming?: boolean;
    isotropic?: boolean;
    renderMethod?: RenderMehodsList;
    texture?: string;
    tintMethod?: TintsVanillaTypes;
}

interface ItemVisualData extends BPComponent {
    geometry: string | GeometryParams;
    materialInstances: Record<string, MaterialParams>;
}

export class SetItemVisual extends BehaviorBlockComponentBuilder<ItemVisualData, "minecraft:item_visual"> {
    /**
     * 
     * @param {ItemVisualData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: ItemVisualData) {
        super("minecraft:item_visual", params);
    }
}