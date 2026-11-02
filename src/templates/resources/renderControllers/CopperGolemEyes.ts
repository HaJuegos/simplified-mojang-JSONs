import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const CopperGolemEyes = createRPRenderController({
    renderControllers: [
        {
            idRender: "copper_golem_eyes",
            arrays: {
                textures: {
                    "Array.textures": ["Texture.eyes_default", "Texture.eyes_exposed", "Texture.eyes_weathered", "Texture.eyes_oxidized"]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.eyes" }
            ],
            textures: ["Array.textures[v.index]"],
            ignoreLighting: true
        }
    ]
});
