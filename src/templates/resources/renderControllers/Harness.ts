import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Harness = createRPRenderController({
    renderControllers: [
        {
            idRender: "harness",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.default"],
            partVisibility: [
                { gogglesUp: `!${MoLang.hasPlayerRider()}` },
                { goggles: `${MoLang.hasPlayerRider()}` }
            ]
        }
    ]
});
