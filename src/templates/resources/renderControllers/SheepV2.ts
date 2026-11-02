import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const SheepV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "sheep.v2",
            arrays: {
                geometries: {
                    "Array.geos": ["Geometry.default", "Geometry.sheared"]
                }
            },
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Array.geos[${MoLang.isSheared()}]`,
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`${MoLang.isBaby()} ? Texture.baby : Texture.default`]
        }
    ]
});
