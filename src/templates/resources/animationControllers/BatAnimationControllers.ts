import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const BatAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "bat.move",
            initialState: "flying",
            states: {
                flying: {
                    animations: ["flying"],
                    transitions: [
                        { resting: MoLang.isResting() }
                    ]
                },
                resting: {
                    animations: ["resting"],
                    transitions: [
                        { flying: `!${MoLang.isResting()}` }
                    ]
                }
            }
        }
    ]
});
