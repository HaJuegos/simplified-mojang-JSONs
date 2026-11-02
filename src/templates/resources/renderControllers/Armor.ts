import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @remarks Este render controller no utiliza las nuevas variantes de los bebes vanillas.
 * @author HaJuegos - 31-10-2026
 */
export const Armor = createRPRenderController({
    renderControllers: [
        {
            idRender: "armor",
            geometry: "Geometry.default",
            materials: [
                {
                    "*": `${MoLang.variable('is_enchanted')} ? Material.enchanted : Material.default`
                }
            ],
            textures: ["variable.has_trim ? variable.trim_path : Texture.default", "Texture.enchanted"]
        }
    ]
});
