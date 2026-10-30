import { createRPAttachable } from "../../../builders/resources/attachables/AttachableTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del attachable para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const ShieldEntity = createRPAttachable({
    idAttach: "minecraft:shield",
    attachable: {
        materials: {
            default: "entity_alphatest",
            enchanted: "entity_alphatest_glint"
        },
        textures: {
            default: "textures/entity/shield",
            enchanted: "textures/misc/enchanted_item_glint"
        },
        geometry: {
            default: "geometry.shield"
        },
        animations: {
            wield: "controller.animation.shield.wield",
            wield_main_hand_first_person: "animation.shield.wield_main_hand_first_person",
            wield_off_hand_first_person: "animation.shield.wield_off_hand_first_person",
            wield_first_person_block: "animation.shield.wield_first_person_blocking",
            wield_main_hand_first_person_block: "animation.shield.wield_main_hand_first_person_blocking",
            wield_off_hand_first_person_block: "animation.shield.wield_off_hand_first_person_blocking",
            wield_third_person: "animation.shield.wield_third_person"
        },
        scripts: {
            initialize: [
                `${MoLang.variable("main_hand_first_person_pos_x")} = 5.3;`,
                `${MoLang.variable("main_hand_first_person_pos_y")} = 26.0;`,
                `${MoLang.variable("main_hand_first_person_pos_z")} = 0.4;`,
                `${MoLang.variable("main_hand_first_person_rot_x")} = 91.0;`,
                `${MoLang.variable("main_hand_first_person_rot_y")} = 65.0;`,
                `${MoLang.variable("main_hand_first_person_rot_z")} = -43.0;`,
                `${MoLang.variable("off_hand_first_person_pos_x")} = -13.5;`,
                `${MoLang.variable("off_hand_first_person_pos_y")} = -5.8;`,
                `${MoLang.variable("off_hand_first_person_pos_z")} = 5.1;`,
                `${MoLang.variable("off_hand_first_person_with_bow_pos_z")} = -25.0;`,
                `${MoLang.variable("off_hand_first_person_rot_x")} = 1.0;`,
                `${MoLang.variable("off_hand_first_person_rot_y")} = 176.0;`,
                `${MoLang.variable("off_hand_first_person_rot_z")} = -2.5;`
            ],
            preAnimation: [
                `${MoLang.variable("is_blocking_main_hand")} = ${MoLang.blocking()} && !${MoLang.isItemNameAny("slot.weapon.offhand", "minecraft:shield")} && ${MoLang.isItemNameAny("slot.weapon.mainhand", "minecraft:shield")};`,
                `${MoLang.variable("is_blocking_off_hand")} = ${MoLang.blocking()} && ${MoLang.isItemNameAny("slot.weapon.offhand", "minecraft:shield")};`,
                `${MoLang.variable("is_using_bow")} = (${MoLang.getEquippedItemName()} == 'bow') && (${MoLang.mainHandItemUseDuration()} > 0.0f);`
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
