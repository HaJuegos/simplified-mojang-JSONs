import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const WitherBoss = createRPRenderController({
    renderControllers: [
        {
            idRender: "wither_boss",
            arrays: {
                textures: {
                    "Array.witherState": ["Texture.invulnerable", "Texture.default"]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Array.wither_state[variable.display_normal_skin]"],
            overlayColor: {
                r: "variable.is_invulnerable ? 1.0 : this",
                g: "variable.is_invulnerable ? 1.0 : this",
                b: "variable.is_invulnerable ? 1.0 : this",
                a: `variable.is_invulnerable ? ${MoLang.overlayAlpha()} : this`
            }
        }
    ]
});
