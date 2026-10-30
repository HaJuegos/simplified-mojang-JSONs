import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const ShieldAnimation = createRPAnimation({
    animations: [
        {
            idAnimation: "shield.wield_main_hand_first_person",
            loop: true,
            bones: {
                shield: {
                    position: [
                        MoLang.variable("main_hand_first_person_pos_x"),
                        MoLang.variable("main_hand_first_person_pos_y"),
                        MoLang.variable("main_hand_first_person_pos_z")
                    ],
                    rotation: [
                        MoLang.variable("main_hand_first_person_rot_x"),
                        MoLang.variable("main_hand_first_person_rot_y"),
                        MoLang.variable("main_hand_first_person_rot_z")
                    ]
                }
            }
        },
        {
            idAnimation: "shield.wield_off_hand_first_person",
            loop: true,
            bones: {
                shield: {
                    position: [
                        MoLang.variable("off_hand_first_person_pos_x"),
                        MoLang.variable("off_hand_first_person_pos_y"),
                        `${MoLang.variable("is_using_bow")} ? ${MoLang.variable("off_hand_first_person_with_bow_pos_z")} : ${MoLang.variable("off_hand_first_person_pos_z")}`
                    ],
                    rotation: [
                        MoLang.variable("off_hand_first_person_rot_x"),
                        MoLang.variable("off_hand_first_person_rot_y"),
                        MoLang.variable("off_hand_first_person_rot_z")
                    ]
                }
            }
        },
        {
            idAnimation: "shield.wield_main_hand_first_person_blocking",
            loop: "hold_on_last_frame",
            bones: {
                shield: {
                    position: {
                        "0": [
                            `${MoLang.variable("main_hand_first_person_pos_x")} - 2`,
                            MoLang.variable("main_hand_first_person_pos_y"),
                            MoLang.variable("main_hand_first_person_pos_z")
                        ],
                        "0.1": [
                            `${MoLang.variable("main_hand_first_person_pos_x")} - 2`,
                            `${MoLang.variable("main_hand_first_person_pos_y")} - 2`,
                            `${MoLang.variable("main_hand_first_person_pos_z")} - 2`
                        ]
                    },
                    rotation: [
                        MoLang.variable("main_hand_first_person_rot_x"),
                        `${MoLang.variable("main_hand_first_person_rot_y")} - 12.0`,
                        MoLang.variable("main_hand_first_person_rot_z")
                    ]
                }
            }
        },
        {
            idAnimation: "shield.wield_off_hand_first_person_blocking",
            loop: "hold_on_last_frame",
            bones: {
                shield: {
                    position: {
                        "0": [
                            `${MoLang.variable("off_hand_first_person_pos_x")} + 0.5`,
                            MoLang.variable("off_hand_first_person_pos_y"),
                            `${MoLang.variable("is_using_bow")} ? ${MoLang.variable("off_hand_first_person_with_bow_pos_z")} : ${MoLang.variable("off_hand_first_person_pos_z")}`
                        ],
                        "0.1": [
                            `${MoLang.variable("off_hand_first_person_pos_x")} + 0.5`,
                            `${MoLang.variable("off_hand_first_person_pos_y")} + 3.2`,
                            `${MoLang.variable("is_using_bow")} ? ${MoLang.variable("off_hand_first_person_with_bow_pos_z")} : ${MoLang.variable("off_hand_first_person_pos_z")} + 1.5`
                        ]
                    },
                    rotation: [
                        MoLang.variable("off_hand_first_person_rot_x"),
                        MoLang.variable("off_hand_first_person_rot_y"),
                        `${MoLang.variable("off_hand_first_person_rot_z")} + 10.0`
                    ]
                }
            }
        },
        {
            idAnimation: "shield.wield_third_person",
            loop: true,
            bones: {
                shield: {
                    position: [`${MoLang.context("item_slot")} == 'main_hand' ? -0.4 : -1.6`, 9.0, 9.3],
                    rotation: [-90.0, 0.0, 90.0],
                    scale: [
                        `${MoLang.context("item_slot")} == 'main_hand' ? 1.0 : -1.0`,
                        -1.0,
                        `${MoLang.context("item_slot")} == 'main_hand' ? -1.0 : 1.0`
                    ]
                }
            }
        }
    ]
});
