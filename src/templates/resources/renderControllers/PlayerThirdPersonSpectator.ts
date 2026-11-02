import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const PlayerThirdPersonSpectator = createRPRenderController({
    renderControllers: [
        {
            idRender: "player.third_person_spectator",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.spectator" }
            ],
            textures: ["Texture.default"],
            partVisibility: [
                { "*": false },
                { head: true },
                { hat: true },
                { helmet: "variable.helmet_layer_visible" }
            ],
            color: {
                r: "1.0f",
                g: "1.0f",
                b: "1.0f",
                a: "0.3f"
            }
        }
    ]
});
