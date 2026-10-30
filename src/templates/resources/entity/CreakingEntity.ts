import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const CreakingEntity = createRPEntityClient({
    idEntity: "minecraft:creaking",
    params: {
        materials: {
            default: "creaking",
            eyes: "creaking_eyes"
        },
        geometry: { default: "geometry.creaking" },
        textures: {
            default: "textures/entity/creaking/creaking",
            eyes: "textures/entity/creaking/creaking_eyes"
        },
        renderControllers: ["controller.render.creaking", "controller.render.creaking_eyes"],
        scripts: {
            preAnimation: [
                `${MoLang.variable("state")} = ${MoLang.property("minecraft:creaking_state")};`,
                `${MoLang.variable("is_immobile")} = ${MoLang.variable("state")} == 'hostile_observed';`,
                `variable.is_immobile_timer = !variable.is_immobile ? 0.0 : ((variable.is_immobile_timer ?? 0.0) + ${MoLang.deltaTime()});`,
                `${MoLang.variable("y_head_rotation")} = ${MoLang.targetYRotation()};`,
                `${MoLang.variable("walking")} = ${MoLang.variable("is_immobile_timer")} < 0.75 && ${MoLang.modifiedMoveSpeed()} > 0.01;`,
                `${MoLang.variable("attacking")} = ${MoLang.variable("attack_time")} > 0.0;`,
                `${MoLang.variable("swaying")} = ${MoLang.property("minecraft:creaking_swaying_ticks")} > 0;`,
                `${MoLang.variable("twitching")} = ${MoLang.variable("state")} == 'twitching';`,
                `variable.twitching_timer = !variable.twitching ? 0.0 : ((variable.twitching_timer ?? 0.0) + ${MoLang.deltaTime()});`,
                `${MoLang.variable("emissive_time_min")} = ${MoLang.variable("twitching_timer")} / 4.0;`,
                `${MoLang.variable("emissive_time_max")} = ${MoLang.variable("emissive_time_min")} * 2.0f;`,
                `variable.time_to_emissive_eyes_switch = (!variable.twitching || (variable.has_switched_eyes_emissiveness_from_twitching ?? false)) ? ((variable.had_emissive_eyes_from_twitching ?? true) ? Math.Random(0.1, 0.4) : Math.Random(variable.emissive_time_min, variable.emissive_time_max)) : ((variable.time_to_emissive_eyes_switch ?? 0.0) - ${MoLang.deltaTime()});`,
                "variable.had_emissive_eyes_from_twitching = variable.has_emissive_eyes_from_twitching ?? false;",
                `${MoLang.variable("has_emissive_eyes_from_twitching")} = ${MoLang.variable("time_to_emissive_eyes_switch")} < 0.0 ? !${MoLang.variable("had_emissive_eyes_from_twitching")} : ${MoLang.variable("had_emissive_eyes_from_twitching")};`,
                `${MoLang.variable("has_switched_eyes_emissiveness_from_twitching")} = ${MoLang.variable("has_emissive_eyes_from_twitching")} != ${MoLang.variable("had_emissive_eyes_from_twitching")};`,
                `${MoLang.variable("has_emissive_eyes")} = ${MoLang.variable("has_emissive_eyes_from_twitching")} || ${MoLang.variable("state")} == 'hostile_observed' || ${MoLang.variable("state")} == 'hostile_unobserved';`
            ],
            animate: [
                "look_at_target_controller",
                "walk_controller",
                "attack_controller",
                "sway_controller",
                "twitch_controller"
            ],
            shouldUpdateEffectsOffscreen: "1.0"
        },
        animations: {
            look_at_target: "animation.creaking.look_at_target",
            look_at_target_controller: "controller.animation.creaking.look_at_target",
            walk: "animation.creaking.walk",
            walk_controller: "controller.animation.creaking.walk",
            attack: "animation.creaking.attack",
            attack_controller: "controller.animation.creaking.attack",
            sway: "animation.creaking.sway",
            sway_controller: "controller.animation.creaking.sway",
            twitch: "animation.creaking.twitch",
            twitch_controller: "controller.animation.creaking.twitch"
        },
        soundEffects: {
            sway: "mob.creaking.sway",
            twitch: "mob.creaking.twitch"
        },
        spawnEgg: { texture: "spawn_egg_creaking" }
    }
});
