import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ChickenV3 = createRPRenderController({
    renderControllers: [
        {
            idRender: "chicken.v3",
            arrays: {
                textures: {
                    "Array.textures": ["Texture.default", "Texture.warm", "Texture.cold"],
                    "Array.babyTextures": ["Texture.baby_default", "Texture.baby_warm", "Texture.baby_cold"]
                },
                geometries: {
                    "Array.geos": ["Geometry.default", "Geometry.warm", "Geometry.cold"]
                }
            },
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Array.geos[v.index]`,
            materials: [
                { "*": "v.is_cold ? Material.cold : Material.default" },
                { "leg*": "Material.legs" }
            ],
            textures: [`${MoLang.isBaby()} ? Array.baby_textures[v.index] : Array.textures[v.index]`]
        }
    ]
});
