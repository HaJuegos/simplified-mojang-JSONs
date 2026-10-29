import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const ElytraAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "elytra.default",
            initialState: "default",
            states: {
                default: {
                    animations: ["default"],
                    transitions: [
                        { gliding: MoLang.isGliding() },
                        { sneaking: MoLang.isSneaking() },
                        { sleeping: MoLang.isSleeping() },
                        { swimming: MoLang.isSwimming() }
                    ],
                    blendTransition: 0.1,
                    blendViaShortestPath: true
                },
                gliding: {
                    animations: ["gliding"],
                    transitions: [
                        { sleeping: MoLang.isSleeping() },
                        { swimming: MoLang.isSwimming() },
                        { default: `!${MoLang.isGliding()}` }
                    ],
                    blendTransition: 0.1,
                    blendViaShortestPath: true
                },
                sneaking: {
                    animations: ["sneaking"],
                    transitions: [
                        { gliding: MoLang.isGliding() },
                        { sleeping: MoLang.isSleeping() },
                        { swimming: MoLang.isSwimming() },
                        { default: `!${MoLang.isSneaking()}` }
                    ],
                    blendTransition: 0.1,
                    blendViaShortestPath: true
                },
                sleeping: {
                    animations: ["sleeping"],
                    transitions: [
                        { gliding: MoLang.isGliding() },
                        { sneaking: MoLang.isSneaking() },
                        { swimming: MoLang.isSwimming() },
                        { default: `!${MoLang.isSleeping()}` }
                    ],
                    blendTransition: 0.1,
                    blendViaShortestPath: true
                },
                swimming: {
                    animations: ["swimming"],
                    transitions: [
                        { gliding: MoLang.isGliding() },
                        { sneaking: MoLang.isSneaking() },
                        { sleeping: MoLang.isSleeping() },
                        { default: `!${MoLang.isSwimming()}` }
                    ],
                    blendTransition: 0.1,
                    blendViaShortestPath: true
                }
            }
        }
    ]
});
