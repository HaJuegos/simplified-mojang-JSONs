import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const CamelEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:camel",
    params: {
        materials: { default: "camel" },
        textures: {
            default: "textures/entity/camel/camel",
            baby: "textures/entity/camel/camel_baby"
        },
        geometry: {
            default: "geometry.camel",
            baby: "geometry.camel.baby"
        },
        spawnEgg: { texture: "spawn_egg_camel" },
        scripts: {
            preAnimation: [
                `variable.dash_cooldown = (!(variable.last_dash_cooldown ?? true) && ${MoLang.hasDashCooldown()}) ? 2.75 : ( variable.dash_cooldown ?? 0 );`,
                `${MoLang.variable("dash_cooldown")} = ${MoLang.max(0, `${MoLang.variable("dash_cooldown")} - ${MoLang.deltaTime()}`)};`,
                `${MoLang.variable("dash_cooldown_progress")} = (2.75 - ${MoLang.variable("dash_cooldown")}) / 2.75;`,
                `${MoLang.variable("last_dash_cooldown")} = ${MoLang.hasDashCooldown()};`,
                `${MoLang.variable("moving")} = ${MoLang.modifiedMoveSpeed()} > 0.05 || ${MoLang.verticalSpeed()} > 0.05;`,
                `${MoLang.variable("xTargetRot")} = ${MoLang.max("-30", MoLang.min(MoLang.targetXRotation(), 30))};`,
                `${MoLang.variable("xHeadRot")} = ${MoLang.variable("dash_cooldown_progress")} > 0 ? ${MoLang.max("-25", MoLang.min(`${MoLang.variable("xTargetRot")} + (45 * (1 - ${MoLang.variable("dash_cooldown_progress")}))`, 70))} : ${MoLang.variable("xTargetRot")};`,
                `${MoLang.variable("yHeadRot")} = ${MoLang.max("-30", MoLang.min(MoLang.targetYRotation(), 30))};`
            ],
            scale: `${MoLang.isBaby()} ? (1 / 0.45) : 1.0`,
            animate: ["controller_general", "controller_idle"]
        },
        animations: {
            moving: "animation.camel.walk",
            sit_down: "animation.camel.sit_down",
            sitting: "animation.camel.sit",
            stand_up: "animation.camel.stand_up",
            look_at_target: "animation.camel.look_at_target",
            dashing: "animation.camel.dash",
            dashing_sound: "animation.camel.dash_sound",
            idle: "animation.camel.idle",
            baby_moving: "animation.camel.baby_walk",
            baby_sit_down: "animation.camel.baby_sit_down",
            baby_sitting: "animation.camel.baby_sit",
            baby_stand_up: "animation.camel.baby_stand_up",
            baby_dashing: "animation.camel.baby_dash",
            baby_idle: "animation.camel.baby_idle",
            controller_general: "controller.animation.camel.general",
            controller_idle: "controller.animation.camel.idle"
        },
        soundEffects: {
            sitDown: "mob.camel.sit",
            standUp: "mob.camel.stand",
            dash: "mob.camel.dash"
        },
        renderControllers: ["controller.render.camel.v2"]
    }
});
