import { createRPAttachable } from "../../../builders/resources/attachables/AttachableTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del attachable para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const Bow = createRPAttachable({
    idAttach: "minecraft:bow",
    attachable: {
        materials: {
            default: "entity_alphatest",
            enchanted: "entity_alphatest_glint"
        },
        textures: {
            default: "textures/items/bow_standby",
            bow_pulling_0: "textures/items/bow_pulling_0",
            bow_pulling_1: "textures/items/bow_pulling_1",
            bow_pulling_2: "textures/items/bow_pulling_2",
            enchanted: "textures/misc/enchanted_item_glint"
        },
        geometry: {
            default: "geometry.bow_standby",
            bow_pulling_0: "geometry.bow_pulling_0",
            bow_pulling_1: "geometry.bow_pulling_1",
            bow_pulling_2: "geometry.bow_pulling_2"
        },
        animations: {
            wield: "animation.bow.wield",
            wield_first_person_pull: "animation.bow.wield_first_person_pull"
        },
        scripts: {
            preAnimation: [
                `${MoLang.variable("charge_amount")} = ${MoLang.max(0.0, MoLang.min(`(${MoLang.mainHandItemMaxDuration()} - (${MoLang.mainHandItemUseDuration()} - ${MoLang.frameAlpha()} + 1.0)) / 10.0`, 1.0))};`
            ],
            animate: [
                "wield",
                {
                    wield_first_person_pull: `${MoLang.mainHandItemUseDuration()} > 0.0f && ${MoLang.context("is_first_person")}`
                }
            ]
        },
        renderControllers: [
            "controller.render.bow"
        ]
    }
});
