import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const CreakingEyes = createRPRenderController({
    renderControllers: [
        {
            idRender: "creaking_eyes",
            arrays: {
                materials: {
                    "Array.materials": ["Material.default", "Material.eyes"]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": `Array.materials[${MoLang.isInvisible()} ? 0 : 1]` }
            ],
            textures: ["Texture.eyes"],
            ignoreLighting: true,
            partVisibility: [
                { "*": false },
                { head: "variable.has_emissive_eyes" }
            ]
        }
    ]
});
