import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 3° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const VillagerV2Base = createRPRenderController({
    renderControllers: [
        {
            idRender: "villager_v2_base",
            arrays: {
                textures: {
                    "Array.skins": ["Texture.base", "Texture.base2", "Texture.base3", "Texture.base4", "Texture.base5", "Texture.base6"]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`Array.skins[${MoLang.skinId()}]`]
        }
    ]
});
