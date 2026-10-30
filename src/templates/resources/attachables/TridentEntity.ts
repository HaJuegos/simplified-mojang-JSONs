import { createRPAttachable } from "../../../builders/resources/attachables/AttachableTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del attachable para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const TridentEntity = createRPAttachable({
    idAttach: "minecraft:trident",
    attachable: {
        materials: {
            default: "entity_alphatest",
            enchanted: "entity_alphatest_glint"
        },
        textures: {
            default: "textures/entity/trident",
            enchanted: "textures/misc/enchanted_item_glint"
        },
        geometry: {
            default: "geometry.trident"
        },
        animations: {
            wield: "controller.animation.trident.wield",
            wield_first_person: "animation.trident.wield_first_person",
            wield_first_person_raise: "animation.trident.wield_first_person_raise",
            wield_first_person_raise_shake: "animation.trident.wield_first_person_raise_shake",
            wield_first_person_riptide: "animation.trident.wield_first_person_riptide",
            wield_third_person: "animation.trident.wield_third_person",
            wield_third_person_raise: "animation.trident.wield_third_person_raise"
        },
        scripts: {
            preAnimation: [
                `${MoLang.variable("charge_amount")} = ${MoLang.max(0.0, MoLang.min(`(${MoLang.mainHandItemMaxDuration()} - (${MoLang.mainHandItemUseDuration()} - ${MoLang.frameAlpha()} + 1.0)) / 10.0`, 1.0))};`
            ],
            animate: [
                "wield"
            ]
        },
        renderControllers: [
            "controller.render.item_default"
        ]
    }
});
