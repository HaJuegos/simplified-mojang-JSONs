import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const SpearAnimation = createRPAnimation({
    animations: [
        {
            idAnimation: "spear.held_first_person",
            loop: true,
            bones: {
                spear: {
                    position: [0.0, 24.0, -27.0],
                    rotation: [
                        0.0,
                        0.0,
                        "-20.0 + c.owning_entity->v.fp_melee_spear_use_attachable_rotation_z + c.owning_entity->v.fp_melee_spear_attack_attachable_rotation_z"
                    ]
                }
            }
        },
        {
            idAnimation: "spear.held_third_person",
            loop: true,
            bones: {
                spear: {
                    position: [0.0, 24.0, "-27.0 + c.owning_entity->v.tp_melee_spear_attack_attachable_position_z"],
                    rotation: [0.0, 0.0, "-c.owning_entity->v.tp_melee_spear_use_attachable_rotation_z"]
                }
            }
        },
        {
            idAnimation: "spear.hit",
            loop: false,
            animationLength: 0.5,
            overridePreviousAnimation: false,
            bones: {
                spear: {
                    position: {
                        "0.0": [0.0, 0.0, 0.0],
                        "0.05": [0.0, 0.0, 1.5],
                        "0.1": [0.0, 0.0, 7.5],
                        "0.2": [0.0, 0.0, 6.0],
                        "0.5": [0.0, 0.0, 0.0]
                    }
                }
            },
            soundEffects: {
                "0.0": {
                    effect: "hit"
                }
            }
        }
    ]
});
