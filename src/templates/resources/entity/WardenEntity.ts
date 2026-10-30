import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const WardenEntity = createRPEntityClient({
    idEntity: "minecraft:warden",
    params: {
        materials: {
            default: "warden",
            bioluminescent_layer: "warden_bioluminescent_layer"
        },
        textures: {
            default: "textures/entity/warden/warden",
            bioluminescent_layer: "textures/entity/warden/warden_bioluminescent_layer",
            spots_1: "textures/entity/warden/warden_pulsating_spots_1",
            spots_2: "textures/entity/warden/warden_pulsating_spots_2",
            tendrils: "textures/entity/warden/warden_tendrils",
            heart: "textures/entity/warden/warden_heart"
        },
        geometry: { default: "geometry.warden" },
        scripts: {
            preAnimation: [
                `variable.animation_speed = Math.min(0.5, 3.0 * ${MoLang.modifiedMoveSpeed()});`,
                `${MoLang.variable("anim_pos_mod")} = 49.388962;`,
                `${MoLang.variable("bob")} = ${MoLang.lifeTime()} * 20;`,
                `${MoLang.variable("modified_bob")} = ${MoLang.variable("bob")} * 0.1 * 57.2958;`,
                `${MoLang.variable("modified_bob_sin")} = ${MoLang.sin(MoLang.variable("modified_bob"))};`,
                `${MoLang.variable("modified_bob_cos")} = ${MoLang.cos(MoLang.variable("modified_bob"))};`,
                `${MoLang.variable("pi")} = 180;`,
                `${MoLang.variable("halfpi")} = ${MoLang.variable("pi")} / 2.0;`,
                `${MoLang.variable("tendril_animation_length")} = 0.5;`,
                `${MoLang.variable("head_x_rot")} = (68.7549 * ${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * ${MoLang.variable("anim_pos_mod")} + ${MoLang.variable("halfpi")}`)} * ${MoLang.min(0.35, MoLang.variable("animation_speed"))}) + (${MoLang.sin(`${MoLang.variable("bob")} * 5.72958`)} * 0.06);`,
                `variable.head_z_rot = (17.1887 * math.sin(${MoLang.modifiedDistanceMoved()} * variable.anim_pos_mod) * variable.animation_speed) + (Math.cos(variable.bob * 5.72958) * 0.06);`,
                `${MoLang.variable("body_x_rot")} = (57.2958 * ${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * ${MoLang.variable("anim_pos_mod")}`)} * ${MoLang.min(0.35, MoLang.variable("animation_speed"))}) + (${MoLang.cos(`${MoLang.variable("bob")} * 5.72958`)} * 0.025);`,
                `${MoLang.variable("body_z_rot")} = (5.72958 * ${MoLang.sin(`${MoLang.modifiedDistanceMoved()} * ${MoLang.variable("anim_pos_mod")}`)} * ${MoLang.variable("animation_speed")}) + (${MoLang.sin(`${MoLang.variable("bob")} * 5.72958`)} * 0.025);`,
                `${MoLang.variable("left_leg_x_rot")} = 57.2958 * ${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * ${MoLang.variable("anim_pos_mod")}`)} * ${MoLang.variable("animation_speed")};`,
                `${MoLang.variable("right_leg_x_rot")} = 57.2958 * ${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * ${MoLang.variable("anim_pos_mod")} + ${MoLang.variable("pi")}`)} * ${MoLang.variable("animation_speed")};`,
                `${MoLang.variable("left_arm_x_rot")} = -(45.8366 * ${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * ${MoLang.variable("anim_pos_mod")}`)} * ${MoLang.variable("animation_speed")});`,
                `${MoLang.variable("right_arm_x_rot")} = -(45.8366 * ${MoLang.sin(`${MoLang.modifiedDistanceMoved()} * ${MoLang.variable("anim_pos_mod")}`)} * ${MoLang.variable("animation_speed")});`,
                `${MoLang.variable("vibration_phase")} = ${MoLang.timeSinceLastVibrationDetection()};`,
                `${MoLang.variable("tendril_animation")} = ${MoLang.variable("vibration_phase")} < 0.0 ? 0.0 : 1.0 - (${MoLang.min(MoLang.timeSinceLastVibrationDetection(), MoLang.variable("tendril_animation_length"))} / ${MoLang.variable("tendril_animation_length")});`,
                `${MoLang.variable("left_tendril_x_rot")} = ${MoLang.variable("tendril_animation")} * (${MoLang.cos(`${MoLang.variable("bob")} * 128.9155`)} * ${MoLang.variable("pi")} * 0.1);`,
                `${MoLang.variable("right_tendril_x_rot")} = ${MoLang.variable("left_tendril_x_rot")} * -1;`,
                `${MoLang.variable("spots_1_alpha")} = 0.25 * ${MoLang.cos(`${MoLang.variable("bob")} * 2.578`)};`,
                `${MoLang.variable("spots_2_alpha")} = 0.25 * ${MoLang.cos(`${MoLang.variable("bob")} * 2.578 + 180.0`)};`,
                `${MoLang.variable("tendrils_alpha")} = ${MoLang.variable("tendril_animation")};`,
                `${MoLang.variable("heart_alpha")} = 0.8 * (1.0 - ${MoLang.heartbeatPhase()});`
            ],
            animate: [
                "base_pose",
                { move: `!(${MoLang.isEmerging()} || ${MoLang.isDigging()})` },
                "shiver_controller",
                "bob",
                { emerge: MoLang.isEmerging() },
                "sniff_controller",
                { dig: MoLang.isDigging() },
                "roar_controller",
                { look_at_target: `!(${MoLang.isEmerging()} || ${MoLang.isDigging()})` },
                "melee_attack_controller",
                { swimming: `${MoLang.swimAmount()} > 0.0` },
                "sonic_boom_controller"
            ],
            shouldUpdateEffectsOffscreen: "1.0"
        },
        animations: {
            emerge: "animation.warden.emerge",
            sniff: "animation.warden.sniff",
            sniff_controller: "controller.animation.warden.sniff",
            dig: "animation.warden.dig",
            roar: "animation.warden.roar",
            roar_controller: "controller.animation.warden.roar",
            shiver: "animation.warden.shiver",
            shiver_controller: "controller.animation.warden.shiver",
            base_pose: "animation.humanoid.base_pose.v1.0",
            look_at_target: "animation.warden.look_at_target.default",
            move: "animation.warden.move",
            melee_attack: "animation.warden.attack",
            melee_attack_controller: "controller.animation.warden.melee_attacking",
            bob: "animation.warden.bob",
            swimming: "animation.humanoid.swimming.v1.0",
            hurt: "animation.warden.hurt",
            hurt_controller: "controller.animation.warden.hurt",
            sonic_boom: "animation.warden.sonic_boom",
            sonic_boom_controller: "controller.animation.warden.sonic_boom"
        },
        renderControllers: [
            "controller.render.warden",
            "controller.render.warden_bioluminescent_layer",
            "controller.render.warden_spots_1",
            "controller.render.warden_spots_2",
            "controller.render.warden_tendrils",
            "controller.render.warden_heart"
        ],
        enableAttachables: true,
        spawnEgg: { texture: "spawn_egg_warden" },
        soundEffects: {
            emerge: "mob.warden.emerge",
            sniff: "mob.warden.sniff",
            dig: "mob.warden.dig",
            roar: "mob.warden.roar",
            clicking: "mob.warden.clicking"
        },
        particleEffects: { digging: "minecraft:warden_dig" }
    }
});
