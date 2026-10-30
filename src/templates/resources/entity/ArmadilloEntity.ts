import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const ArmadilloEntity = createRPEntityClient({
    idEntity: "minecraft:armadillo",
    params: {
        materials: {
            default: "armadillo"
        },
        geometry: {
            default: "geometry.armadillo",
            baby: "geometry.armadillo.baby"
        },
        textures: {
            default: "textures/entity/armadillo",
            baby: "textures/entity/armadillo/armadillo_baby"
        },
        renderControllers: [
            "controller.render.armadillo.v2"
        ],
        scripts: {
            preAnimation: [
                `${MoLang.variable("x_head_rotation")} = ${MoLang.max("-32.5", MoLang.min(MoLang.targetXRotation(), 32.5))};`,
                `${MoLang.variable("y_head_rotation")} = ${MoLang.max("-22.5", MoLang.min(MoLang.targetYRotation(), 25))};`,
                `${MoLang.variable("is_rolled_up")} = ${MoLang.property("minecraft:armadillo_state")} != 'unrolled';`,
                `variable.rolled_up_time = variable.is_rolled_up ? ((variable.rolled_up_time ?? 0.0) + ${MoLang.deltaTime()}) : 0.0;`,
                `${MoLang.variable("is_peeking")} = ${MoLang.property("minecraft:armadillo_state")} == 'rolled_up_peeking';`,
                `${MoLang.variable("is_unrolling")} = ${MoLang.property("minecraft:armadillo_state")} == 'rolled_up_unrolling';`,
                `variable.unrolling_time = variable.is_unrolling ? ((variable.unrolling_time ?? 0.0) + ${MoLang.deltaTime()}) : 0.0;`,
                `${MoLang.variable("use_rolled_up_model")} = ${MoLang.variable("rolled_up_time")} >= 0.2083 && (${MoLang.variable("unrolling_time")} == 0.0 || ${MoLang.variable("unrolling_time")} <= 1.25);`,
                `${MoLang.variable("walking")} = ${MoLang.modifiedMoveSpeed()} > 0.01 && !${MoLang.variable("is_rolled_up")};`,
                `${MoLang.variable("walk_anim_time_update")} = ${MoLang.animTime()} + ${MoLang.min(3.0, `math.lerp(2.0, 5.0, ${MoLang.modifiedMoveSpeed()})`)} * ${MoLang.deltaTime()};`
            ],
            animate: [
                "look_at_target_controller",
                "walk_controller",
                "roll_up_controller"
            ],
            shouldUpdateEffectsOffscreen: "1.0",
            scale: `${MoLang.isBaby()} ? (1 / 0.6) : 1.0`
        },
        animations: {
            look_at_target: "animation.armadillo.look_at_target",
            look_at_target_controller: "controller.animation.armadillo.look_at_target",
            walk: "animation.armadillo.walk",
            walk_controller: "controller.animation.armadillo.walk",
            roll_up: "animation.armadillo.roll_up",
            rolled_up: "animation.armadillo.rolled_up",
            peek: "animation.armadillo.peek",
            unroll: "animation.armadillo.unroll",
            unroll_fast: "animation.armadillo.unroll_fast",
            roll_up_controller: "controller.animation.armadillo.roll_up",
            baby_walk: "animation.armadillo.baby_walk",
            baby_roll_up: "animation.armadillo.baby_roll_up",
            baby_rolled_up: "animation.armadillo.baby_rolled_up",
            baby_peek: "animation.armadillo.baby_peek",
            baby_unroll: "animation.armadillo.baby_unroll",
            baby_unroll_fast: "animation.armadillo.baby_unroll_fast"
        },
        soundEffects: {
            roll: "mob.armadillo.roll",
            land: "mob.armadillo.land",
            peek: "mob.armadillo.peek",
            unrollStart: "mob.armadillo.unroll_start",
            unrollFinish: "mob.armadillo.unroll_finish"
        },
        spawnEgg: {
            texture: "spawn_egg_armadillo"
        }
    }
});
