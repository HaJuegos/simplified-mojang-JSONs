import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 2° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const Armadillo = createRPRenderController({
    renderControllers: [
        {
            idRender: "armadillo",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.default"],
            partVisibility: [
                { body: "!variable.use_rolled_up_model" },
                { tail: "!variable.use_rolled_up_model" },
                { leftHindLeg: "!variable.use_rolled_up_model" },
                { rightHindLeg: "!variable.use_rolled_up_model" },
                { bodyRolledUp: "variable.use_rolled_up_model" }
            ]
        }
    ]
});
