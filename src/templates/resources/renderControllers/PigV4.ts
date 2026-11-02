import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const PigV4 = createRPRenderController({
    renderControllers: [
        {
            idRender: "pig.v4",
            arrays: {
                textures: {
                    "Array.default": ["Texture.default", "Texture.warm", "Texture.cold"],
                    "Array.baby": ["Texture.baby_default", "Texture.baby_warm", "Texture.baby_cold"]
                }
            },
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Geometry.default`,
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`${MoLang.isBaby()} ? Array.baby[v.index] : Array.default[v.index]`]
        }
    ]
});
