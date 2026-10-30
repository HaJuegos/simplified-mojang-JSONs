import { createRPAttachable } from "../../../builders/resources/attachables/AttachableTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del attachable para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const CrossbowEntity = createRPAttachable({
    idAttach: "minecraft:crossbow",
    attachable: {
        materials: {
            default: "entity_alphatest",
            enchanted: "entity_alphatest_glint"
        },
        textures: {
            default: "textures/items/crossbow_standby",
            crossbow_pulling_0: "textures/items/crossbow_pulling_0",
            crossbow_pulling_1: "textures/items/crossbow_pulling_1",
            crossbow_pulling_2: "textures/items/crossbow_pulling_2",
            crossbow_arrow: "textures/items/crossbow_arrow",
            crossbow_rocket: "textures/items/crossbow_firework",
            enchanted: "textures/misc/enchanted_item_glint"
        },
        geometry: {
            default: "geometry.crossbow_standby",
            crossbow_pulling_0: "geometry.crossbow_pulling_0",
            crossbow_pulling_1: "geometry.crossbow_pulling_1",
            crossbow_pulling_2: "geometry.crossbow_pulling_2",
            crossbow_arrow: "geometry.crossbow_arrow",
            crossbow_rocket: "geometry.crossbow_rocket"
        },
        animations: {
            wield: "animation.crossbow.wield",
            wield_first_person_pull: "animation.crossbow.wield_first_person_pull"
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
            "controller.render.crossbow"
        ]
    }
});
