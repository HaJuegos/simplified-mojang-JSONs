import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 2° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const Panda = createRPRenderController({
    renderControllers: [
        {
            idRender: "panda",
            arrays: {
                textures: {
                    "Array.skins": [
                        "Texture.default",
                        "Texture.lazy",
                        "Texture.worried",
                        "Texture.playful",
                        "Texture.brown",
                        "Texture.weak",
                        "Texture.aggressive"
                    ]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`Array.skins[${MoLang.variant()}]`]
        }
    ]
});
