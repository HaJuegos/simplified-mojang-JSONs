import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 2° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const GlowSquid = createRPRenderController({
    renderControllers: [
        {
            idRender: "glow_squid",
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.default"],
            overlayColor: {
                r: 0.0,
                g: 0.0,
                b: 0.0,
                a: "variable.glow_alpha"
            }
        }
    ]
});
