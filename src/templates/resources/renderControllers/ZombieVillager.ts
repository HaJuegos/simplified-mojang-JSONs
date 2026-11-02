import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 3° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const ZombieVillager = createRPRenderController({
    renderControllers: [
        {
            idRender: "zombie_villager",
            rebuildAnimationMatrices: true,
            arrays: {
                textures: {
                    "Array.skins": ["Texture.farmer", "Texture.librarian", "Texture.priest", "Texture.smith", "Texture.butcher"]
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
