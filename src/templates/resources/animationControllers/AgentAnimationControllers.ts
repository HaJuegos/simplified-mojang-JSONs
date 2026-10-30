import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const AgentAnimationControllers = createRPAnimController({
    animControllers: [
        {
            idController: "agent.move",
            initialState: "moving",
            states: {
                moving: {
                    animations: ["move"],
                    transitions: [
                        { swinging_arms: `${MoLang.variable("agent.anim_state")} == 2` },
                        { shrug: `${MoLang.variable("agent.anim_state")} == 3` }
                    ]
                },
                swinging_arms: {
                    animations: ["swing_arms"],
                    transitions: [
                        { moving: `${MoLang.variable("agent.anim_state")} == 1` }
                    ]
                },
                shrug: {
                    animations: ["shrug"],
                    transitions: [
                        { moving: `${MoLang.variable("agent.anim_state")} == 1` }
                    ]
                }
            }
        }
    ]
});
