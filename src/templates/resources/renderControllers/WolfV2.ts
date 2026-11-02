import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const WolfV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "wolf.v2",
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
                    "Array.babyDefault": [
                        "Texture.baby_pale_default",
                        "Texture.baby_ashen_default",
                        "Texture.baby_black_default",
                        "Texture.baby_chestnut_default",
                        "Texture.baby_rusty_default",
                        "Texture.baby_snowy_default",
                        "Texture.baby_spotted_default",
                        "Texture.baby_striped_default",
                        "Texture.baby_woods_default"
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
                    "Array.babyAngry": [
                        "Texture.baby_pale_angry",
                        "Texture.baby_ashen_angry",
                        "Texture.baby_black_angry",
                        "Texture.baby_chestnut_angry",
                        "Texture.baby_rusty_angry",
                        "Texture.baby_snowy_angry",
                        "Texture.baby_spotted_angry",
                        "Texture.baby_striped_angry",
                        "Texture.baby_woods_angry"
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
                    ],
                    "Array.babyTame": [
                        "Texture.baby_pale_tame",
                        "Texture.baby_ashen_tame",
                        "Texture.baby_black_tame",
                        "Texture.baby_chestnut_tame",
                        "Texture.baby_rusty_tame",
                        "Texture.baby_snowy_tame",
                        "Texture.baby_spotted_tame",
                        "Texture.baby_striped_tame",
                        "Texture.baby_woods_tame"
                    ]
                }
            },
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Geometry.default`,
            materials: [
                { "*": "Material.default" }
            ],
            textures: [
                `${MoLang.isBaby()} ? (${MoLang.isAngry()} ? Array.baby_angry[${MoLang.variant()}] : (${MoLang.isTamed()} ? Array.baby_tame[${MoLang.variant()}] : Array.baby_default[${MoLang.variant()}])) :  ${MoLang.isAngry()} ? Array.angry[${MoLang.variant()}] : (${MoLang.isTamed()} ? Array.tame[${MoLang.variant()}] : Array.default[${MoLang.variant()}])`
            ]
        }
    ]
});
