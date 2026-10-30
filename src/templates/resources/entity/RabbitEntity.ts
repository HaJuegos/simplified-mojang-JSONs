import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const RabbitEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:rabbit",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: { default: "rabbit" },
        textures: {
            brown: "textures/entity/rabbit/rabbit_brown",
            white: "textures/entity/rabbit/rabbit_white",
            black: "textures/entity/rabbit/rabbit_black",
            white_splotched: "textures/entity/rabbit/rabbit_white_splotched",
            gold: "textures/entity/rabbit/rabbit_gold",
            salt: "textures/entity/rabbit/rabbit_salt",
            toast: "textures/entity/rabbit/rabbit_toast",
            baby_brown: "textures/entity/rabbit/rabbit_brown_baby",
            baby_white: "textures/entity/rabbit/rabbit_white_baby",
            baby_black: "textures/entity/rabbit/rabbit_black_baby",
            baby_white_splotched: "textures/entity/rabbit/rabbit_white_splotched_baby",
            baby_gold: "textures/entity/rabbit/rabbit_gold_baby",
            baby_salt: "textures/entity/rabbit/rabbit_salt_baby",
            baby_toast: "textures/entity/rabbit/rabbit_toast_baby"
        },
        geometry: {
            default: "geometry.rabbit.v2",
            baby: "geometry.rabbit.baby"
        },
        animations: {
            move: "animation.rabbit.move.v2",
            baby_transform: "animation.rabbit.baby_transform",
            look_at_target: "animation.common.look_at_target",
            move_baby: "animation.rabbit.move.baby",
            idle_head_tilt: "animation.rabbit.idle_head_tilt",
            controller_general: "controller.animation.rabbit.general.v2"
        },
        renderControllers: ["controller.render.rabbit.v2"],
        spawnEgg: { texture: "spawn_egg_rabbit" },
        scripts: {
            scale: `${MoLang.isBaby()} ? (1 / 0.4) : (1 / 0.6)`,
            preAnimation: [
                "variable.was_moving = (variable.moving ?? false);",
                `${MoLang.variable("moving")} = ${MoLang.modifiedMoveSpeed()} > 0.05 || ${MoLang.verticalSpeed()} > 0.05;`,
                `${MoLang.variable("random_cooldown")} = math.random(9, 11);`,
                "variable.idle_cooldown = ((!variable.moving && variable.was_moving) || (variable.idle_cooldown ?? 0) <= 0) ? variable.random_cooldown : (variable.idle_cooldown ?? variable.random_cooldown);",
                `${MoLang.variable("idle_cooldown")} = ${MoLang.max(0, `${MoLang.variable("idle_cooldown")} - ${MoLang.deltaTime()}`)};`,
                `${MoLang.variable("should_idle")} = ${MoLang.variable("idle_cooldown")} <= 0;`
            ],
            animate: ["controller_general"]
        }
    }
});
