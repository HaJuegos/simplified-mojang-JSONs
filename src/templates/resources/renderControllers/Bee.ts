import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 2° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const Bee = createRPRenderController({
    renderControllers: [
        {
            idRender: "bee",
            arrays: {
                textures: {
                    "array.skins": ["texture.default", "texture.nectar", "texture.angry", "texture.angry_nectar"]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`array.skins[${MoLang.property('minecraft:has_nectar')} + ${MoLang.isAngry()} * 2]`]
        }
    ]
});
