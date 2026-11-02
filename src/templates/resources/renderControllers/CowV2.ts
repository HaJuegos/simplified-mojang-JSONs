import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 2° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const CowV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "cow.v2",
            arrays: {
                textures: {
                    "Array.textures": ["Texture.default", "Texture.warm", "Texture.cold"]
                },
                geometries: {
                    "Array.geos": ["Geometry.default", "Geometry.warm", "Geometry.cold"]
                }
            },
            geometry: "Array.geos[v.index]",
            materials: [
                { "*": "v.is_cold ? Material.cold : Material.default" }
            ],
            textures: ["Array.textures[v.index]"]
        }
    ]
});
