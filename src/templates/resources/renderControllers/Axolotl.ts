import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 2° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const Axolotl = createRPRenderController({
    renderControllers: [
        {
            idRender: "axolotl",
            arrays: {
                textures: {
                    "Array.skins": ["Texture.lucy", "Texture.cyan", "Texture.gold", "Texture.wild", "Texture.blue"]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" },
                { "*arm": "Material.limbs" },
                { "*leg": "Material.limbs" }
            ],
            textures: [`Array.skins[${MoLang.variant()}]`]
        }
    ]
});
