import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Fireball = createRPRenderController({
    renderControllers: [
        {
            idRender: "fireball",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.default"],
            onFireColor: {
                r: 0.0,
                g: 0.0,
                b: 0.0,
                a: 0.0
            },
            filterLighting: true
        }
    ]
});
