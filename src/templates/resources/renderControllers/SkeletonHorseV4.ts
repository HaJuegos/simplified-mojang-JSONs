import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const SkeletonHorseV4 = createRPRenderController({
    renderControllers: [
        {
            idRender: "skeleton_horse.v4",
            partVisibility: [
                { Saddle: false },
                { "Bit*": false },
                { Bridle: false },
                { "Reins*": false },
                { "Bag*": false },
                { "MuleEar*": false }
            ],
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Geometry.default`,
            materials: [
                { "*": "Material.default" }
            ],
            textures: [
                `${MoLang.isBaby()} ? Texture.baby_skeleton: Texture.skeleton`,
                "Texture.markings_none",
                "Texture.armor_none"
            ]
        }
    ]
});
