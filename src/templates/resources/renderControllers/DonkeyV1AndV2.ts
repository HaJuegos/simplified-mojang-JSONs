import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 4° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const DonkeyV1AndV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "donkey.v1.and.v2",
            partVisibility: [
                { "*saddle*": `${MoLang.isSaddled()}` },
                { SaddleMouthLine: `${MoLang.isSaddled()} && ${MoLang.hasRider()}` },
                { SaddleMouthLineR: `${MoLang.isSaddled()} && ${MoLang.hasRider()}` },
                { "Bag*": `${MoLang.isChested()}` },
                { "Ear*": false }
            ],
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: ["Texture.donkey", "Texture.markings_none", "Texture.armor_none"]
        }
    ]
});
