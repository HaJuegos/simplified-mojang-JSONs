import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const PersonaLodThirdPerson = createRPRenderController({
    renderControllers: [
        {
            idRender: "persona_lod.third_person",
            geometry: "Geometry.persona_lod",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.persona_lod"],
            partVisibility: [
                { "*": true },
                { helmet: "variable.helmet_layer_visible" },
                { leftLegging: "variable.leg_layer_visible" },
                { rightLegging: "variable.leg_layer_visible" },
                { leftBoot: "variable.boot_layer_visible" },
                { rightBoot: "variable.boot_layer_visible" },
                { leftSock: "variable.boot_layer_visible && variable.leg_layer_visible" },
                { rightSock: "variable.boot_layer_visible && variable.leg_layer_visible" },
                { bodyArmor: "variable.chest_layer_visible" },
                { leftArmArmor: "variable.chest_layer_visible" },
                { rightArmArmor: "variable.chest_layer_visible" },
                { belt: "variable.chest_layer_visible && variable.leg_layer_visible" }
            ]
        }
    ]
});
