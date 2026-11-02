import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const CopperGolemFlower = createRPRenderController({
    renderControllers: [
        {
            idRender: "copper_golem_flower",
            geometry: "Geometry.flower",
            materials: [
                { "*": "Material.flower" }
            ],
            textures: ["Texture.flower"],
            partVisibility: [
                { "*": "false" },
                { flower: `${MoLang.property('minecraft:has_flower')}` }
            ]
        }
    ]
});
