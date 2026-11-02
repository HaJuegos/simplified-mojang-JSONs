import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 2° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const Wolf = createRPRenderController({
    renderControllers: [
        {
            idRender: "wolf",
            arrays: {
                textures: {
                    "Array.default": [
                        "Texture.pale_default",
                        "Texture.ashen_default",
                        "Texture.black_default",
                        "Texture.chestnut_default",
                        "Texture.rusty_default",
                        "Texture.snowy_default",
                        "Texture.spotted_default",
                        "Texture.striped_default",
                        "Texture.woods_default"
                    ],
                    "Array.angry": [
                        "Texture.pale_angry",
                        "Texture.ashen_angry",
                        "Texture.black_angry",
                        "Texture.chestnut_angry",
                        "Texture.rusty_angry",
                        "Texture.snowy_angry",
                        "Texture.spotted_angry",
                        "Texture.striped_angry",
                        "Texture.woods_angry"
                    ],
                    "Array.tame": [
                        "Texture.pale_tame",
                        "Texture.ashen_tame",
                        "Texture.black_tame",
                        "Texture.chestnut_tame",
                        "Texture.rusty_tame",
                        "Texture.snowy_tame",
                        "Texture.spotted_tame",
                        "Texture.striped_tame",
                        "Texture.woods_tame"
                    ]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: [
                `${MoLang.isAngry()} ? Array.angry[${MoLang.variant()}] : (${MoLang.isTamed()} ? Array.tame[${MoLang.variant()}] : Array.default[${MoLang.variant()}])`
            ]
        }
    ]
});
