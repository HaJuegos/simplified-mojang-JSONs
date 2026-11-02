import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ExperienceOrb = createRPRenderController({
    renderControllers: [
        {
            idRender: "experience_orb",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.default"],
            overlayColor: {
                r: `(Math.sin(${MoLang.lifeTime()} * 500.0) + 1.0) * 0.5`,
                g: "1.0",
                b: `(Math.sin(${MoLang.lifeTime()} * 500.0 + 240.0) + 1.0) * 0.1`,
                a: "0.5"
            },
            ignoreLighting: true,
            uvAnim: {
                offset: ["variable.u", "variable.v"],
                scale: [1.0, 1.0]
            }
        }
    ]
});
