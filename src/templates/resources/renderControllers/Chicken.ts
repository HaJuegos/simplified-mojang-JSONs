import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 3° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const Chicken = createRPRenderController({
    renderControllers: [
        {
            idRender: "chicken",
            geometry: "geometry.default",
            materials: [
                { "*": "Material.default" },
                { "leg*": "Material.legs" }
            ],
            textures: ["texture.default"]
        }
    ]
});
