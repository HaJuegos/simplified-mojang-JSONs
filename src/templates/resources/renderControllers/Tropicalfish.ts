import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const Tropicalfish = createRPRenderController({
    renderControllers: [
        {
            idRender: "tropicalfish",
            arrays: {
                geometries: {
                    "Array.models": ["Geometry.typeA", "Geometry.typeB"]
                },
                textures: {
                    "Array.types": ["Texture.typeA", "Texture.typeB"],
                    "Array.patterns": [
                        "Texture.aPattern1",
                        "Texture.aPattern2",
                        "Texture.aPattern3",
                        "Texture.aPattern4",
                        "Texture.aPattern5",
                        "Texture.aPattern6",
                        "Texture.bPattern1",
                        "Texture.bPattern2",
                        "Texture.bPattern3",
                        "Texture.bPattern4",
                        "Texture.bPattern5",
                        "Texture.bPattern6"
                    ]
                }
            },
            geometry: "Array.models[variable.TropicalFish.Base]",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Array.types[variable.TropicalFish.Base]", "Array.patterns[variable.TropicalFish.Pattern]"]
        }
    ]
});
