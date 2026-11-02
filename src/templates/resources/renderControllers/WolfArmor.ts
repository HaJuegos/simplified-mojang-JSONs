import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const WolfArmor = createRPRenderController({
    renderControllers: [
        {
            idRender: "wolf_armor",
            arrays: {
                textures: {
                    "Array.cracks": ["Texture.cracked_none", "Texture.cracked_low", "Texture.cracked_medium", "Texture.cracked_high"]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["variable.is_dyed ? Texture.dyed : Texture.default", "Array.cracks[variable.cracks_index]"]
        }
    ]
});
