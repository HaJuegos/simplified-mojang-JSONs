import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const EnderDragonDeathMainPass = createRPRenderController({
    renderControllers: [
        {
            idRender: "ender_dragon_death_main_pass",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.dissolve_1" }
            ],
            textures: ["Texture.default"]
        }
    ]
});
