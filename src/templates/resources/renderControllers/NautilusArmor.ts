import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const NautilusArmor = createRPRenderController({
    renderControllers: [
        {
            idRender: "nautilus_armor",
            partVisibility: [
                { "*": false },
                { head: "variable.has_armor" }
            ],
            arrays: {
                textures: {
                    "Array.armor": [
                        "Texture.armor_none",
                        "Texture.armor_copper",
                        "Texture.armor_iron",
                        "Texture.armor_gold",
                        "Texture.armor_diamond",
                        "Texture.armor_netherite"
                    ]
                }
            },
            geometry: "Geometry.armor",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Array.armor[variable.armor_texture_slot]"]
        }
    ]
});
