import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ZombieVillagerV3Base = createRPRenderController({
    renderControllers: [
        {
            idRender: "zombie_villager_v3_base",
            geometry: `${MoLang.isBaby()}? Geometry.baby : Geometry.default`,
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`${MoLang.isBaby()}? Texture.baby_default : Texture.default`]
        }
    ]
});
