import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const GuardianEntityV1 = createRPEntityClient({
    idEntity: "minecraft:guardian",
    params: {
        materials: {
            default: "guardian",
            ghost: "guardian_ghost"
        },
        textures: {
            default: "textures/entity/guardian",
            elder: "textures/entity/guardian_elder",
            beam: "textures/entity/guardian_beam"
        },
        geometry: {
            default: "geometry.guardian",
            ghost: "geometry.guardian"
        },
        animations: {
            setup: "animation.guardian.setup",
            spikes: "animation.guardian.spikes.v1.0",
            swim: "animation.guardian.swim",
            look_at_target: "animation.common.look_at_target",
            move_eye: "animation.guardian.move_eye.v1.0"
        },
        scripts: {
            initialize: [
                `${MoLang.variable("spike_animation_speed")} = 0.0;`,
                `${MoLang.variable("tail_animation_speed")} = 0.0;`,
                `${MoLang.variable("tail_swim")} = 0.0;`
            ],
            preAnimation: [
                `variable.spike_shake = Math.sin(${MoLang.lifeTime()} * 2000)/50;`,
                `variable.spike_animation_speed = ${MoLang.lifeTime()} < 0.1 ? 0.0 : (!${MoLang.isInWater()} ? (Math.round(Math.sin(${MoLang.lifeTime()} * 2000)) == 0.0 ? (Math.random(0.0, 1.0)) : (variable.spike_animation_speed)) : (${MoLang.isMoving()} ? (variable.spike_animation_speed - variable.spike_animation_speed * 0.06) : (variable.spike_animation_speed + (1.0 - variable.spike_animation_speed) * 0.06)));`,
                `${MoLang.variable("spike_extension")} = (1.0 - ${MoLang.variable("spike_animation_speed")}) * 0.55;`,
                `${MoLang.variable("tail_animation_speed")} = ${MoLang.lifeTime()} < 0.1 ? 0.0 : (!${MoLang.isInWater()} ? 2.0 : ${MoLang.isMoving()} ? (${MoLang.variable("tail_animation_speed")} < 0.5 ? 4.0 : ${MoLang.variable("tail_animation_speed")} + (0.5 - ${MoLang.variable("tail_animation_speed")}) * 0.1) : ${MoLang.variable("tail_animation_speed")} + (0.125 - ${MoLang.variable("tail_animation_speed")}) * 0.2);`,
                `${MoLang.variable("tail_swim")} = ${MoLang.lifeTime()} < 0.1 ? 0.0 : (${MoLang.variable("tail_swim")} + ${MoLang.variable("tail_animation_speed")});`,
                "variable.tail_base_angle = Math.sin(variable.tail_swim*20.0);"
            ],
            animate: ["setup", "spikes", "swim", "look_at_target", "move_eye"]
        },
        renderControllers: ["controller.render.guardian"],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 26
        }
    }
});
