import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const SulfurCubeOuter = createRPRenderController({
    renderControllers: [
        {
            idRender: "sulfur_cube_outer",
            geometry: `${MoLang.isBaby()} ? Geometry.small : Geometry.default`,
            materials: [
                { "*": "Material.outer" }
            ],
            partVisibility: [
                { "*": `!${MoLang.isInvisible()}` }
            ],
            textures: [`${MoLang.isBaby()} ? Texture.outer_small : Texture.outer`]
        }
    ]
});
