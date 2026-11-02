import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const HappyGhast = createRPRenderController({
    renderControllers: [
        {
            idRender: "happy_ghast",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`${MoLang.isBaby()} ? Texture.ghastling : Texture.happy_ghast`],
            partVisibility: [
                { "*": `!${MoLang.isInvisible()}` }
            ]
        }
    ]
});
