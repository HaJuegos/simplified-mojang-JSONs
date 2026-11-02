import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 4° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const PigV3 = createRPRenderController({
    renderControllers: [
        {
            idRender: "pig.v3",
            arrays: {
                textures: {
                    "Array.default": ["Texture.default", "Texture.warm", "Texture.cold"]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Array.default[v.index]"]
        }
    ]
});
