import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const BeeV2 = createRPRenderController({
    renderControllers: [
        {
            idRender: "bee.v2",
            arrays: {
                textures: {
                    "array.skins": ["texture.default", "texture.nectar", "texture.angry", "texture.angry_nectar"],
                    "array.babySkins": ["texture.baby_default", "texture.baby_nectar", "texture.baby_angry", "texture.baby_angry_nectar"]
                }
            },
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Geometry.default`,
            materials: [
                { "*": "Material.default" }
            ],
            textures: [
                `${MoLang.isBaby()} ? array.baby_skins[${MoLang.property('minecraft:has_nectar')} + ${MoLang.isAngry()} * 2] : array.skins[${MoLang.property('minecraft:has_nectar')} + ${MoLang.isAngry()} * 2]`
            ]
        }
    ]
});
