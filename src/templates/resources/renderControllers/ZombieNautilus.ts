import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ZombieNautilus = createRPRenderController({
    renderControllers: [
        {
            idRender: "zombie_nautilus",
            arrays: {
                geometries: {
                    "Array.geometries": ["Geometry.default", "Geometry.coral"]
                },
                textures: {
                    "Array.textures": ["Texture.default", "Texture.coral"]
                }
            },
            geometry: "Array.geometries[v.variant_index]",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Array.textures[v.variant_index]"],
            partVisibility: [
                {
                    head: "!variable.has_armor",
                    yellowCoral: "!variable.has_armor",
                    pinkCoral: "!variable.has_armor",
                    blueCoral: "!variable.has_armor",
                    redCoral: "!variable.has_armor"
                }
            ]
        }
    ]
});
