import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

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

type MaterialInstancesData = Record<string, MaterialParams>;

export class SetMaterialInstances extends BehaviorBlockComponentBuilder<MaterialInstancesData, "minecraft:material_instances"> {
    /**
     * 
     * @param {MaterialInstancesData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: MaterialInstancesData) {
        super("minecraft:material_instances", params);
    }
}