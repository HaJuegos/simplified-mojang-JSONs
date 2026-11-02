import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const PlayerMapPersona = createRPRenderController({
    renderControllers: [
        {
            idRender: "player.map.persona",
            arrays: {
                geometries: {
                    "Array.geos": ["Geometry.default", "Geometry.animated_face"]
                }
            },
            geometry: `Array.geos[${MoLang.isPersonaOrPremiumSkin()}]`,
            materials: [
                { "*": "Material.animated" }
            ],
            textures: ["Texture.animated_face"],
            partVisibility: [
                { "*": false },
                { head: true },
                { hat: true },
                { helmet: true }
            ],
            uvAnim: {
                offset: [0.0, "variable.is_blinking * 0.5"],
                scale: [1.0, 1.0]
            }
        }
    ]
});
