import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 4° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const SkeletonHorseV1AndV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "skeleton_horse.v1.and.v2",
            partVisibility: [
                { "*saddle*": false },
                { SaddleMouthLine: false },
                { SaddleMouthLineR: false },
                { "Bag*": false },
                { "MuleEar*": false }
            ],
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.skeleton", "Texture.markings_none", "Texture.armor_none"]
        }
    ]
});
