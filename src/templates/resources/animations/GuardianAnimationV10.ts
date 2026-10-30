import { createRPAnimation } from "../../../builders/resources/animations/AnimationTemplateBuilder";
import { FormatVersionListAnims } from "../../../types/resources/animations/AnimationTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla de animaciones para la sobreescritura de las mismas. Sus datos base ya están definidos.
 * @author HaJuegos - 29-10-2026
 */
export const GuardianAnimationV10 = createRPAnimation({
    formatVersion: FormatVersionListAnims.v1_8_0,
    animations: [
        {
            idAnimation: "guardian.move_eye.v1.0",
            loop: true,
            bones: {
                eye: {
                    position: [`${MoLang.eyeTargetXRotation()} - this`, `${MoLang.eyeTargetYRotation()} - 1.0 - this`, "-8.25 - this"]
                }
            }
        },
        {
            idAnimation: "guardian.spikes.v1.0",
            loop: true,
            bones: {
                spikepart0: {
                    position: [
                        "-this",
                        `-8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5) * 0.01 + (variable.spike_extension + variable.spike_shake)) - this`,
                        `8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5) * 0.01 - (variable.spike_extension + variable.spike_shake)) - this`
                    ]
                },
                spikepart1: {
                    position: [
                        "-this",
                        `-8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 1) * 0.01 + (variable.spike_extension + variable.spike_shake)) - this`,
                        `-8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 1) * 0.01 - (variable.spike_extension + variable.spike_shake)) - this`
                    ]
                },
                spikepart10: {
                    position: [
                        `8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 10) * 0.01 - (variable.spike_extension + variable.spike_shake)) - this`,
                        `-32 + 8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 10) * 0.01 + (variable.spike_extension + variable.spike_shake)) - this`,
                        "-this"
                    ]
                },
                spikepart11: {
                    position: [
                        `-8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 11) * 0.01 - (variable.spike_extension + variable.spike_shake)) - this`,
                        `-32 + 8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 11) * 0.01 + (variable.spike_extension + variable.spike_shake)) - this`,
                        "-this"
                    ]
                },
                spikepart2: {
                    position: [
                        `8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 2) * 0.01 - (variable.spike_extension + variable.spike_shake)) - this`,
                        `-8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 2) * 0.01 + (variable.spike_extension + variable.spike_shake)) - this`,
                        "-this"
                    ]
                },
                spikepart3: {
                    position: [
                        `-8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 3) * 0.01 - (variable.spike_extension + variable.spike_shake)) - this`,
                        `-8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 3) * 0.01 + (variable.spike_extension + variable.spike_shake)) - this`,
                        0.0
                    ]
                },
                spikepart4: {
                    position: [
                        `-8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 4) * 0.01 - (variable.spike_extension - variable.spike_shake)) - this`,
                        "-16 - this",
                        `-8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 4) * 0.01 - (variable.spike_extension - variable.spike_shake)) - this`
                    ]
                },
                spikepart5: {
                    position: [
                        `8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 5) * 0.01 - (variable.spike_extension - variable.spike_shake)) - this`,
                        "-16 - this",
                        `-8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 5) * 0.01 - (variable.spike_extension - variable.spike_shake)) - this`
                    ]
                },
                spikepart6: {
                    position: [
                        `8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 6) * 0.01 - (variable.spike_extension - variable.spike_shake)) - this`,
                        "-16 - this",
                        `8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 6) * 0.01 - (variable.spike_extension - variable.spike_shake)) - this`
                    ]
                },
                spikepart7: {
                    position: [
                        `-8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 7) * 0.01 - (variable.spike_extension - variable.spike_shake)) - this`,
                        "-16 - this",
                        `8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 7) * 0.01 - (variable.spike_extension - variable.spike_shake)) - this`
                    ]
                },
                spikepart8: {
                    position: [
                        "-this",
                        `-32 + 8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 8) * 0.01 + (variable.spike_extension + variable.spike_shake)) - this`,
                        `8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 8) * 0.01 - (variable.spike_extension + variable.spike_shake)) - this`
                    ]
                },
                spikepart9: {
                    position: [
                        "-this",
                        `-32 + 8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 9) * 0.01 + (variable.spike_extension + variable.spike_shake)) - this`,
                        `-8 * (1 + math.cos(${MoLang.lifeTime()} * 20 * 1.5 + 9) * 0.01 - (variable.spike_extension + variable.spike_shake)) - this`
                    ]
                }
            }
        }
    ]
});
