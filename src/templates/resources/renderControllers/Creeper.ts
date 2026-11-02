import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Creeper = createRPRenderController({
    renderControllers: [
        {
            idRender: "creeper",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.default"],
            overlayColor: {
                r: `((variable.flash == 0.0) || (${MoLang.swellingDir()} < 0.0)) ? this : 1.0`,
                g: `((variable.flash == 0.0) || (${MoLang.swellingDir()} < 0.0)) ? this : 1.0`,
                b: `((variable.flash == 0.0) || (${MoLang.swellingDir()} < 0.0)) ? this : 1.0`,
                a: `((variable.flash == 0.0) || (${MoLang.swellingDir()} < 0.0)) ? this : 0.5`
            }
        }
    ]
});
