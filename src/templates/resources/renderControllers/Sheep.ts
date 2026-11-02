import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 2° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const Sheep = createRPRenderController({
    renderControllers: [
        {
            idRender: "sheep",
            arrays: {
                geometries: {
                    "Array.geos": ["Geometry.default", "Geometry.sheared"]
                }
            },
            geometry: `Array.geos[${MoLang.isSheared()}]`,
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.default"]
        }
    ]
});
