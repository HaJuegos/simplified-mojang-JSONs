import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version v3 en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const VillagerV1_0 = createRPRenderController({
    renderControllers: [
        {
            idRender: "villager.v1.0",
            arrays: {
                textures: {
                    "Array.skins": ["Texture.farmer", "Texture.librarian", "Texture.priest", "Texture.smith", "Texture.butcher"]
                }
            },
            geometry: "Geometry.default",
            partVisibility: [
                {
                    "*": false,
                    head: true,
                    nose: true,
                    body: true,
                    arms: true,
                    leg0: true,
                    leg1: true
                }
            ],
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`Array.skins[${MoLang.variant()}]`]
        }
    ]
});
