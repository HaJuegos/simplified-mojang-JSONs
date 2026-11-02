import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EnderCrystal = createRPRenderController({
    renderControllers: [
        {
            idRender: "ender_crystal",
            geometry: "Geometry.default",
            partVisibility: [
                { base: `${MoLang.showBottom()}` }
            ],
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.default"]
        }
    ]
});
