import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const CatV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "cat.v2",
            arrays: {
                textures: {
                    "Array.skins": [
                        "Texture.white",
                        "Texture.black",
                        "Texture.red",
                        "Texture.siamese",
                        "Texture.british",
                        "Texture.calico",
                        "Texture.persian",
                        "Texture.ragdoll",
                        "Texture.tabby",
                        "Texture.all_black",
                        "Texture.jellie"
                    ],
                    "Array.babySkins": [
                        "Texture.baby_white",
                        "Texture.baby_black",
                        "Texture.baby_red",
                        "Texture.baby_siamese",
                        "Texture.baby_british",
                        "Texture.baby_calico",
                        "Texture.baby_persian",
                        "Texture.baby_ragdoll",
                        "Texture.baby_tabby",
                        "Texture.baby_all_black",
                        "Texture.baby_jellie"
                    ],
                    "Array.tame": [
                        "Texture.white_tame",
                        "Texture.black_tame",
                        "Texture.red_tame",
                        "Texture.siamese_tame",
                        "Texture.british_tame",
                        "Texture.calico_tame",
                        "Texture.persian_tame",
                        "Texture.ragdoll_tame",
                        "Texture.tabby_tame",
                        "Texture.all_black_tame",
                        "Texture.jellie_tame"
                    ],
                    "Array.babyTame": [
                        "Texture.baby_white_tame",
                        "Texture.baby_black_tame",
                        "Texture.baby_red_tame",
                        "Texture.baby_siamese_tame",
                        "Texture.baby_british_tame",
                        "Texture.baby_calico_tame",
                        "Texture.baby_persian_tame",
                        "Texture.baby_ragdoll_tame",
                        "Texture.baby_tabby_tame",
                        "Texture.baby_all_black_tame",
                        "Texture.baby_jellie_tame"
                    ]
                }
            },
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Geometry.default`,
            materials: [
                { "*": "Material.default" }
            ],
            textures: [
                `${MoLang.isTamed()} ?  ${MoLang.isBaby()} ? Array.baby_tame[${MoLang.variant()}] : Array.tame[${MoLang.variant()}] : ${MoLang.isBaby()} ? Array.baby_skins[${MoLang.variant()}] : Array.skins[${MoLang.variant()}]`
            ]
        }
    ]
});
