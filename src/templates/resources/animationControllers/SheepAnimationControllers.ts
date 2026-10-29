import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const SheepAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "sheep.move",
            initialState: "default",
            states: {
                default: {
                    animations: [
                        { walk: MoLang.modifiedMoveSpeed() }
                    ],
                    transitions: [
                        { grazing: MoLang.isGrazing() }
                    ]
                },
                grazing: {
                    animations: [
                        { grazing: `!${MoLang.isBaby()}` },
                        { baby_grazing: MoLang.isBaby() }
                    ],
                    transitions: [
                        { default: MoLang.anyAnimationFinished() }
                    ]
                }
            }
        }
    ]
});
