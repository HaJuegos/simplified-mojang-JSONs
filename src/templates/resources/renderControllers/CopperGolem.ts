import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const CopperGolem = createRPRenderController({
    renderControllers: [
        {
            idRender: "copper_golem",
            arrays: {
                textures: {
                    "Array.textures": ["Texture.default", "Texture.exposed", "Texture.weathered", "Texture.oxidized"]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Array.textures[v.index]"]
        }
    ]
});
