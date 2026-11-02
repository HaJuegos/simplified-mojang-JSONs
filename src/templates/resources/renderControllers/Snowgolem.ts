import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Snowgolem = createRPRenderController({
    renderControllers: [
        {
            idRender: "snowgolem",
            arrays: {
                textures: {
                    "Array.skins": ["Texture.default"]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" },
                { "head*": "Material.head" }
            ],
            textures: ["Array.skins[0]"]
        }
    ]
});
