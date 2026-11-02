import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Vex = createRPRenderController({
    renderControllers: [
        {
            idRender: "vex",
            arrays: {
                textures: {
                    "Array.textures": ["Texture.default", "Texture.charging"]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`Array.textures[${MoLang.isCharging()}]`],
            ignoreLighting: true
        }
    ]
});
