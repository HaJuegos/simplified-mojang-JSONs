import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ArmorStand = createRPRenderController({
    renderControllers: [
        {
            idRender: "armor_stand",
            geometry: "geometry.default",
            partVisibility: [
                { baseplate: `!${MoLang.isInUi()}` }
            ],
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["texture.default"],
            overlayColor: {
                r: "this",
                g: "this",
                b: "this",
                a: "0.0"
            }
        }
    ]
});
