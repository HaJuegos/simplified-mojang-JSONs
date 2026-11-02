import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 2° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const Rabbit = createRPRenderController({
    renderControllers: [
        {
            idRender: "rabbit",
            arrays: {
                textures: {
                    "Array.skins": [
                        "Texture.brown",
                        "Texture.white",
                        "Texture.black",
                        "Texture.white_splotched",
                        "Texture.gold",
                        "Texture.salt"
                    ]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`${MoLang.getName()} == 'Toast' ? Texture.toast : Array.skins[${MoLang.variant()}]`]
        }
    ]
});
