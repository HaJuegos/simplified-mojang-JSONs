import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 2° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const Strider = createRPRenderController({
    renderControllers: [
        {
            idRender: "strider",
            arrays: {
                textures: {
                    "Array.base": ["Texture.default", "Texture.saddled"],
                    "Array.suffocated": ["Texture.suffocated", "Texture.suffocated_saddled"]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`${MoLang.isShaking()} ? Array.suffocated[${MoLang.isSaddled()}] : Array.base[${MoLang.isSaddled()}]`]
        }
    ]
});
