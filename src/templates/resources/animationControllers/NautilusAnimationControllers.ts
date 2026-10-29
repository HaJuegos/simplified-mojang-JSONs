import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const NautilusAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "nautilus.general",
            initialState: "swimming",
            states: {
                swimming: {
                    animations: [
                        { breathe: "math.min(1.0, math.lerp(0.75, 1.5, query.modified_move_speed))" },
                        { swim: "query.has_rider ? 0.0 : math.min(1.0, math.lerp(0.0, 6.0, query.modified_move_speed))" },
                        "look_at_target"
                    ],
                    particleEffects: [
                        {
                            effect: "bubbles",
                            locator: "bubble_particle_emitter"
                        }
                    ]
                }
            }
        },
        {
            idController: "nautilus.sound",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { dashing: MoLang.hasDashCooldown() }
                    ]
                },
                dashing: {
                    animations: ["dashing"],
                    transitions: [
                        { default: `!${MoLang.hasDashCooldown()}` }
                    ]
                }
            }
        }
    ]
});
