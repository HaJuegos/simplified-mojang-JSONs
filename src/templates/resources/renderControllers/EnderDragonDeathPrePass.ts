import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EnderDragonDeathPrePass = createRPRenderController({
    renderControllers: [
        {
            idRender: "ender_dragon_death_pre_pass",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.dissolve_0" }
            ],
            textures: ["Texture.exploding"],
            partVisibility: [
                { "*": `${MoLang.deathTicks()} > 1.0` }
            ],
            isHurtColor: {
                r: "this",
                g: "this",
                b: "this",
                a: `${MoLang.deathTicks()} > 1.0 ? variable.death_alpha : this`
            }
        }
    ]
});
