import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const BreezeEyes = createRPRenderController({
    renderControllers: [
        {
            idRender: "breeze_eyes",
            geometry: "Geometry.breeze_eyes",
            materials: [
                { "*": "Material.breeze_eyes" }
            ],
            textures: ["Texture.breeze_eyes"],
            ignoreLighting: true
        }
    ]
});
