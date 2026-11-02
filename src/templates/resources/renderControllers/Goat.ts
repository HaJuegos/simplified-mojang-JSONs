import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 2° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const Goat = createRPRenderController({
    renderControllers: [
        {
            idRender: "goat",
            geometry: "Geometry.default",
            partVisibility: [
                { rightHorn: "variable.goat_has_right_horn" },
                { leftHorn: "variable.goat_has_left_horn" }
            ],
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.default"]
        }
    ]
});
