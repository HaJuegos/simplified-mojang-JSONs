import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const VillagerV3Level = createRPRenderController({
    renderControllers: [
        {
            idRender: "villager_v3_level",
            arrays: {
                textures: {
                    "Array.levels": [
                        "Texture.level_stone",
                        "Texture.level_iron",
                        "Texture.level_gold",
                        "Texture.level_emerald",
                        "Texture.level_diamond"
                    ]
                }
            },
            rebuildAnimationMatrices: true,
            geometry: "Geometry.default",
            partVisibility: [
                { "*": `!${MoLang.isBaby()} && variable.profession_index != 0 && variable.profession_index != 14` }
            ],
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Array.levels[variable.level_index]"]
        }
    ]
});
