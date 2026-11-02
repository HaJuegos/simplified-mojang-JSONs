import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Silverfish = createRPRenderController({
    renderControllers: [
        {
            idRender: "silverfish",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" },
                { "bodyLayer*": "Material.body_layer" }
            ],
            partVisibility: [
                { "*": "0" },
                { bodypart0: "1" },
                { bodypart1: "1" },
                { bodypart2: "1" },
                { bodypart3: "1" },
                { bodypart4: "1" },
                { bodypart5: "1" },
                { bodypart6: "1" },
                { bodylayer0: "1" },
                { bodylayer1: "1" },
                { bodylayer2: "1" }
            ],
            textures: ["Texture.default"]
        }
    ]
});
