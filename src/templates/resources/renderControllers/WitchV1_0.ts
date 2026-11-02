import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 2° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const WitchV1_0 = createRPRenderController({
    renderControllers: [
        {
            idRender: "witch.v1.0",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            partVisibility: [
                {
                    "*": false,
                    head: true,
                    nose: true,
                    body: true,
                    arms: true,
                    leg0: true,
                    leg1: true,
                    hat: true,
                    hat2: true,
                    hat3: true,
                    hat4: true
                }
            ],
            textures: ["Texture.default"]
        }
    ]
});
