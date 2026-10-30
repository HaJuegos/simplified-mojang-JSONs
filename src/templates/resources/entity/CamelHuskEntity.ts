import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const CamelHuskEntity = createRPEntityClient({
    idEntity: "minecraft:camel_husk",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_12_0,
        materials: { default: "camel" },
        textures: { default: "textures/entity/camel_husk/camel_husk" },
        geometry: { default: "geometry.camel_husk" },
        spawnEgg: { texture: "spawn_egg_camel_husk" },
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
            animate: ["general_controller", "idle_controller"]
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
            general_controller: "controller.animation.camel_husk.general",
            idle_controller: "controller.animation.camel_husk.idle"
        },
        soundEffects: {
            sitDown: "mob.camel_husk.sit",
            standUp: "mob.camel_husk.stand",
            dash: "mob.camel_husk.dash"
        },
        renderControllers: ["controller.render.camel_husk"]
    }
});
