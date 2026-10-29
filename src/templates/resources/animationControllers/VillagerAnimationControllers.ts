import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const VillagerAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "villager.baby",
            initialState: "baby",
            states: {
                baby: {
                    animations: [
                        { baby_transform: MoLang.isBaby() }
                    ]
                }
            }
        },
        {
            idController: "villager.general",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        "general",
                        { look_at_target: `!${MoLang.isSleeping()}` }
                    ]
                }
            }
        },
        {
            idController: "villager.move",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { move: MoLang.modifiedMoveSpeed() }
                    ]
                }
            }
        }
    ]
});
