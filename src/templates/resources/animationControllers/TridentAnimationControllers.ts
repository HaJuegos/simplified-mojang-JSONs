import { createRPAnimController } from "../../../builders/resources/animControllers/AnimControllerTemplateBuilder";
import { FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de controladores de animación para la sobreescritura de los mismos. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const TridentAnimationControllers = createRPAnimController({
    formatVersion: FormatVersionAnimControllerList.MostRecent,
    animControllers: [
        {
            idController: "trident.wield",
            initialState: "first_person",
            states: {
                first_person: {
                    animations: [
                        "wield_first_person",
                        { wield_first_person_raise: `${MoLang.mainHandItemUseDuration()} > 0.0f` },
                        { wield_first_person_raise_shake: `${MoLang.mainHandItemUseDuration()} > 0.0f` },
                        { wield_first_person_riptide: `${MoLang.canDamageNearbyMobs()} > 0.0` }
                    ],
                    transitions: [
                        { third_person: `!${MoLang.context("is_first_person")}` }
                    ]
                },
                third_person: {
                    animations: [
                        "wield_third_person",
                        { wield_third_person_raise: `${MoLang.mainHandItemUseDuration()} > 0.0f || ${MoLang.hasTarget()}` }
                    ],
                    transitions: [
                        { first_person: MoLang.context("is_first_person") }
                    ]
                }
            }
        }
    ]
});
