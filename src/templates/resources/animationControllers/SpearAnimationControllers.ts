import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const SpearAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "spear.held",
            initialState: "first_person",
            states: {
                first_person: {
                    animations: ["held_first_person"],
                    transitions: [
                        { third_person: `!${MoLang.context("is_first_person")}` }
                    ]
                },
                third_person: {
                    animations: ["held_third_person"],
                    transitions: [
                        { first_person: MoLang.context("is_first_person") }
                    ]
                }
            }
        },
        {
            idController: "spear.hit",
            initialState: "default",
            states: {
                default: {
                    transitions: [
                        {
                            hit: "c.owning_entity->query.ticks_since_last_kinetic_weapon_hit >= 0.0 && c.owning_entity->query.ticks_since_last_kinetic_weapon_hit <= 5.0"
                        }
                    ]
                },
                hit: {
                    animations: ["hit"],
                    transitions: [
                        { default: MoLang.allAnimationsFinished() }
                    ]
                }
            }
        }
    ]
});
