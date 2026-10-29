import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const EndermanAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "enderman.base_pose",
            initialState: "default",
            states: {
                default: {
                    animations: ["base_pose", "arms_legs"]
                }
            }
        },
        {
            idController: "enderman.carrying",
            initialState: "default",
            states: {
                carry: {
                    animations: ["carrying"],
                    transitions: [
                        { default: `!${MoLang.isCarryingBlock()}` }
                    ]
                },
                default: {
                    transitions: [
                        { carry: MoLang.isCarryingBlock() }
                    ]
                }
            }
        },
        {
            idController: "enderman.scary_face",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        { scary: MoLang.isAngry() }
                    ]
                },
                scary: {
                    animations: ["scary_face"],
                    transitions: [
                        { default: `!${MoLang.isAngry()}` }
                    ]
                }
            }
        }
    ]
});
