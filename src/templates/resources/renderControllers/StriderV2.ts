import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const StriderV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "strider.v2",
            arrays: {
                textures: {
                    "Array.base": ["Texture.default", "Texture.saddled"],
                    "Array.suffocated": ["Texture.suffocated", "Texture.suffocated_saddled"],
                    "Array.baby": ["Texture.baby_default", "Texture.baby_suffocated"]
                }
            },
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Geometry.default`,
            materials: [
                { "*": "Material.default" }
            ],
            textures: [
                `${MoLang.isBaby()} ? Array.baby[${MoLang.isShaking()}] : ${MoLang.isShaking()} ? Array.suffocated[${MoLang.isSaddled()}] : Array.base[${MoLang.isSaddled()}]`
            ]
        }
    ]
});
