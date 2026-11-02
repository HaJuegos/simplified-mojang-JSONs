import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 2° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const Cat = createRPRenderController({
    renderControllers: [
        {
            idRender: "cat",
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
                    ]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`${MoLang.isTamed()} ? Array.tame[${MoLang.variant()}] : Array.skins[${MoLang.variant()}]`]
        }
    ]
});
