import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const PlayerEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.MostRecent,
    idEntity: "minecraft:player",
    params: {
        materials: {
            default: "entity_alphatest",
            cape: "entity_alphatest",
            animated: "player_animated",
            spectator: "player_spectator"
        },
        textures: {
            default: "textures/entity/steve",
            cape: "textures/entity/cape_invisible"
        },
        geometry: {
            default: "geometry.humanoid.custom",
            cape: "geometry.cape"
        },
        scripts: {
            scale: "0.9375",
            variables: {
                "variable.fpMeleeSpearUseAttachableRotationZ": "public",
                "variable.tpMeleeSpearUseAttachableRotationZ": "public",
                "variable.fpMeleeSpearAttackAttachableRotationZ": "public",
                "variable.tpMeleeSpearAttackAttachablePositionZ": "public",
                "variable.attackTime": "public",
                "variable.itemUseNormalized": "public"
            },
            initialize: [
                `${MoLang.variable("is_holding_right")} = 0.0;`,
                `${MoLang.variable("is_blinking")} = 0.0;`,
                `${MoLang.variable("last_blink_time")} = 0.0;`,
                `${MoLang.variable("hand_bob")} = 0.0;`,
                `${MoLang.variable("melee_spear_java_to_bedrock_scale")} = 40.0;`
            ],
            preAnimation: [
                `${MoLang.variable("helmet_layer_visible")} = !${MoLang.hasHeadGear()};`,
                `${MoLang.variable("leg_layer_visible")} = 1.0;`,
                `${MoLang.variable("boot_layer_visible")} = 1.0;`,
                `${MoLang.variable("chest_layer_visible")} = 1.0;`,
                `${MoLang.variable('attack_body_rot_y')} = Math.sin(360 * Math.sqrt(${MoLang.variable('attack_time')})) * 10.0;`,
                `${MoLang.variable("tcos0")} = ${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17`)} * ${MoLang.modifiedMoveSpeed()} / ${MoLang.variable("gliding_speed_value")} * 57.3;`,
                `${MoLang.variable("first_person_item_rotation_factor")} = ${MoLang.sin(`(1 - ${MoLang.variable("attack_time")}) * 180.0`)};`,
                `${MoLang.variable("hand_bob")} = ${MoLang.lifeTime()} < 0.01 ? 0.0 : ${MoLang.variable("hand_bob")} + ((${MoLang.isOnGround()} && ${MoLang.isAlive()} ? ${MoLang.max(0.0, MoLang.min(MoLang.sqrt(`${MoLang.pow(MoLang.positionDelta(0), 2.0)} + ${MoLang.pow(MoLang.positionDelta(2), 2.0)}`), 0.1))} : 0.0) - ${MoLang.variable("hand_bob")}) * 0.02;`,
                `${MoLang.variable("map_angle")} = ${MoLang.max(0.0, MoLang.min(`1 - ${MoLang.variable("player_x_rotation")} / 45.1`, 1.0))};`,
                `${MoLang.variable("item_use_duration")} = ${MoLang.mainHandItemUseDuration()} > 0.0 ? (${MoLang.mainHandItemMaxDuration()} - (${MoLang.mainHandItemUseDuration()} - ${MoLang.frameAlpha()} + 1.0)) : 0.0;`,
                `${MoLang.variable("item_use_normalized")} = ${MoLang.mainHandItemUseDuration()} / ${MoLang.mainHandItemMaxDuration()};`,
                `${MoLang.variable("riding_y_offset")} = ${MoLang.isRidingAnyEntityOfType("minecraft:minecart", "minecraft:boat", "minecraft:chest_boat", "minecraft:strider")} ? -3.0 : 0.0;`,
                `${MoLang.variable("melee_spear_equipped")} = ${MoLang.equippedItemAnyTag("slot.weapon.mainhand", "minecraft:is_spear")};`,
                `${MoLang.variable("tp_melee_spear_base_arm_rotation_x")} = (${MoLang.isSwimming()} || ${MoLang.isGliding()}) ? (-115.0 - ${MoLang.targetXRotation()}) : (${MoLang.isCrawling()} ? -115.0 : -30.0);`,
                [
                    `(${MoLang.variable("melee_spear_equipped")}) ? {`,
                    `${MoLang.temp("melee_spear_use_finish_raise_tick")} = ${MoLang.kineticWeaponDelay()};`,
                    `t.melee_spear_use_finish_sway_tick = t.melee_spear_use_finish_raise_tick + ${MoLang.kineticWeaponDismountDuration()};`,
                    "t.melee_spear_use_start_sway_tick = t.melee_spear_use_finish_sway_tick - 20.0;",
                    `t.melee_spear_use_finish_lower_tick = t.melee_spear_use_finish_raise_tick + ${MoLang.kineticWeaponKnockbackDuration()};`,
                    "t.melee_spear_use_start_lower_tick = t.melee_spear_use_finish_lower_tick - 40.0;",
                    `t.melee_spear_use_finish_raise_back_tick = t.melee_spear_use_finish_raise_tick + ${MoLang.kineticWeaponDamageDuration()};`,
                    "t.melee_spear_use_start_raise_back_tick = t.melee_spear_use_finish_raise_back_tick - 5.0;",
                    "t.melee_spear_use_raise_progress = math.clamp(math.inverse_lerp(0.0, t.melee_spear_use_finish_raise_tick, v.item_use_duration), 0.0, 1.0);",
                    "t.melee_spear_use_raise_progress_start = math.clamp(math.inverse_lerp(0.0, 0.5, t.melee_spear_use_raise_progress), 0.0, 1.0);",
                    "t.melee_spear_use_raise_progress_middle = math.clamp(math.inverse_lerp(0.5, 0.8, t.melee_spear_use_raise_progress), 0.0, 1.0);",
                    "t.melee_spear_use_raise_progress_end = math.clamp(math.inverse_lerp(0.8, 1.0, t.melee_spear_use_raise_progress), 0.0, 1.0);",
                    "t.melee_spear_use_sway_progress = math.clamp(math.inverse_lerp(t.melee_spear_use_start_sway_tick, t.melee_spear_use_finish_sway_tick, v.item_use_duration), 0.0, 1.0);",
                    "t.melee_spear_use_lower_progress = math.ease_in_out_elastic(0.0, 1.0, math.clamp(math.inverse_lerp(t.melee_spear_use_start_lower_tick, t.melee_spear_use_finish_lower_tick, v.item_use_duration - 20.0), 0.0, 1.0));",
                    "t.melee_spear_use_raise_back_progress = math.clamp(math.inverse_lerp(t.melee_spear_use_start_raise_back_tick, t.melee_spear_use_finish_raise_back_tick, v.item_use_duration), 0.0, 1.0);",
                    "t.melee_spear_use_sway_intensity = math.ease_out_circ(0.0, 2.0, t.melee_spear_use_sway_progress) + math.ease_in_circ(0.0, -2.0, t.melee_spear_use_raise_back_progress);",
                    "t.melee_spear_use_sway_scale_slow = math.sin(v.item_use_duration * 19.0) * t.melee_spear_use_sway_intensity;",
                    "t.melee_spear_use_sway_scale_fast = math.sin(v.item_use_duration * 30.0) * t.melee_spear_use_sway_intensity;",
                    "v.fp_melee_spear_use_item_position_x = (t.melee_spear_use_raise_progress_start * 0.05 + t.melee_spear_use_raise_progress_end * -0.05 + t.melee_spear_use_sway_scale_slow * 0.005) * v.melee_spear_java_to_bedrock_scale;",
                    "v.fp_melee_spear_use_item_position_y = (t.melee_spear_use_raise_progress_start * -0.075 + t.melee_spear_use_raise_progress_middle * 0.075 + t.melee_spear_use_sway_scale_fast * 0.01) * v.melee_spear_java_to_bedrock_scale;",
                    "v.fp_melee_spear_use_item_position_z = (t.melee_spear_use_raise_progress_start * 0.05 + t.melee_spear_use_raise_progress_end * -0.05 + t.melee_spear_use_sway_scale_slow * 0.005) * v.melee_spear_java_to_bedrock_scale;",
                    "v.fp_melee_spear_use_item_rotation_y = t.melee_spear_use_raise_progress * 20.0 + t.melee_spear_use_lower_progress * 20.0 + t.melee_spear_use_sway_scale_slow * 0.5 + t.melee_spear_use_raise_back_progress * -40.0;",
                    "v.fp_melee_spear_use_item_rotation_z = math.ease_in_out_back(0.0, -60.0, t.melee_spear_use_raise_progress) + t.melee_spear_use_lower_progress * -25.0 + t.melee_spear_use_raise_back_progress * 85.0 + t.melee_spear_use_sway_scale_fast * 0.5;",
                    "v.fp_melee_spear_use_attachable_rotation_z = math.clamp(math.inverse_lerp(0.5, 0.55, t.melee_spear_use_raise_progress), 0.0, 1.0) * -50.0 + t.melee_spear_use_sway_progress * 90.0 + t.melee_spear_use_raise_back_progress * -40.0;",
                    "v.tp_melee_spear_use_arm_rotation_x = t.melee_spear_use_raise_progress_start * -40.0 + t.melee_spear_use_raise_progress_middle * 30.0 + t.melee_spear_use_raise_progress_end * -20.0 + t.melee_spear_use_lower_progress * 20.0 + t.melee_spear_use_raise_back_progress * 10.0;",
                    "v.tp_melee_spear_use_arm_rotation_x = v.tp_melee_spear_use_arm_rotation_x + t.melee_spear_use_sway_scale_slow * 0.6;",
                    "v.tp_melee_spear_use_arm_rotation_y = t.melee_spear_use_sway_scale_fast * 1.0;",
                    "v.tp_melee_spear_use_arm_rotation_z = t.melee_spear_use_sway_scale_slow * 0.5;",
                    "v.tp_melee_spear_use_item_rotation_x = t.melee_spear_use_raise_progress * 60.0 + t.melee_spear_use_raise_back_progress * -60.0;",
                    "v.tp_melee_spear_use_attachable_rotation_z = t.melee_spear_use_raise_progress * 90.0 + t.melee_spear_use_sway_progress * -90.0;",
                    `t.melee_spear_attack_duration_ratio = 1.0 / ${MoLang.baseSwingDuration()};`,
                    "t.melee_spear_attack_raise_end = 0.05 * t.melee_spear_attack_duration_ratio;",
                    "t.melee_spear_attack_thrust_end = 0.2 * t.melee_spear_attack_duration_ratio;",
                    "t.melee_spear_attack_recover_start = 1.0 - (0.6 * t.melee_spear_attack_duration_ratio);",
                    "t.melee_spear_attack_raise_progress = math.clamp(math.inverse_lerp(0.0, t.melee_spear_attack_raise_end, v.attack_time), 0.0, 1.0);",
                    "t.melee_spear_attack_thrust_progress = math.clamp(math.inverse_lerp(t.melee_spear_attack_raise_end, t.melee_spear_attack_thrust_end, v.attack_time), 0.0, 1.0);",
                    "t.melee_spear_attack_recover_progress = math.clamp(math.inverse_lerp(t.melee_spear_attack_recover_start, 1.0, v.attack_time), 0.0, 1.0);",
                    "t.melee_spear_attack_raise_scale = math.ease_in_out_sine(0.0, 1.0, t.melee_spear_attack_raise_progress);",
                    "t.melee_spear_attack_thrust_scale = math.ease_in_quad(0.0, 1.0, t.melee_spear_attack_thrust_progress);",
                    "t.melee_spear_attack_recover_scale = math.ease_in_out_expo(0.0, 1.0, t.melee_spear_attack_recover_progress);",
                    "v.fp_melee_spear_attack_item_position_x = (t.melee_spear_attack_raise_scale * 0.1 + t.melee_spear_attack_thrust_scale * -0.1) * v.melee_spear_java_to_bedrock_scale;",
                    "v.fp_melee_spear_attack_item_position_y = (t.melee_spear_attack_raise_scale * -0.075 + t.melee_spear_attack_recover_scale * 0.075) * v.melee_spear_java_to_bedrock_scale;",
                    "v.fp_melee_spear_attack_item_position_z = (t.melee_spear_attack_raise_scale * 0.65 + t.melee_spear_attack_thrust_scale * -0.65) * v.melee_spear_java_to_bedrock_scale;",
                    "v.fp_melee_spear_attack_item_rotation_y = t.melee_spear_attack_raise_scale * 20.0 + t.melee_spear_attack_recover_scale * -20.0;",
                    "v.fp_melee_spear_attack_item_rotation_z = t.melee_spear_attack_raise_scale * -60.0 + t.melee_spear_attack_recover_scale * 60.0;",
                    "v.fp_melee_spear_attack_attachable_rotation_z = t.melee_spear_attack_raise_scale * 40.0 + t.melee_spear_attack_recover_scale * -40.0;",
                    "v.tp_melee_spear_attack_arm_rotation_x = t.melee_spear_attack_raise_scale * 90.0 + t.melee_spear_attack_thrust_scale * -120.0 + t.melee_spear_attack_recover_scale * 30.0;",
                    "v.tp_melee_spear_attack_item_rotation_x = t.melee_spear_attack_thrust_scale * 60.0 + t.melee_spear_attack_recover_scale * -60.0;",
                    "v.tp_melee_spear_attack_attachable_position_z = (t.melee_spear_attack_thrust_scale * -0.15 + t.melee_spear_attack_recover_scale * 0.15) * v.melee_spear_java_to_bedrock_scale;",
                    "};"
                ].join(" ")
            ],
            animate: ["root"],
            shouldUpdateEffectsOffscreen: "1.0"
        },
        animations: {
            root: "controller.animation.player.root",
            base_controller: "controller.animation.player.base",
            hudplayer: "controller.animation.player.hudplayer",
            humanoid_base_pose: "animation.humanoid.base_pose",
            look_at_target: "controller.animation.humanoid.look_at_target",
            look_at_target_ui: "animation.player.look_at_target.ui",
            look_at_target_default: "animation.humanoid.look_at_target.default",
            look_at_target_gliding: "animation.humanoid.look_at_target.gliding",
            look_at_target_swimming: "animation.humanoid.look_at_target.swimming",
            look_at_target_inverted: "animation.player.look_at_target.inverted",
            cape: "animation.player.cape",
            "move.arms": "animation.player.move.arms",
            "move.legs": "animation.player.move.legs",
            swimming: "animation.player.swim",
            "swimming.no_right_arm": "animation.player.swim.no_right_arm",
            "swimming.legs": "animation.player.swim.legs",
            crawling: "animation.player.crawl",
            "crawling.no_right_arm": "animation.player.crawl.no_right_arm",
            "crawling.legs": "animation.player.crawl.legs",
            "riding.root": "animation.player.riding.root",
            "riding.arms": "animation.player.riding.arms",
            "riding.legs": "animation.player.riding.legs",
            holding: "animation.player.holding",
            holding_heavy_core: "animation.player.holding_heavy_core",
            brandish_spear: "animation.humanoid.brandish_spear",
            holding_spyglass: "animation.humanoid.holding_spyglass",
            charging: "animation.humanoid.charging",
            "attack.positions": "animation.player.attack.positions",
            "attack.rotations": "animation.player.attack.rotations",
            sneaking: "animation.player.sneaking",
            bob: "animation.player.bob",
            damage_nearby_mobs: "animation.humanoid.damage_nearby_mobs",
            bow_and_arrow: "animation.humanoid.bow_and_arrow",
            use_item_progress: "animation.humanoid.use_item_progress",
            skeleton_attack: "animation.skeleton.attack",
            sleeping: "animation.player.sleeping",
            first_person_base_pose: "animation.player.first_person.base_pose",
            first_person_empty_hand: "animation.player.first_person.empty_hand",
            first_person_swap_item: "animation.player.first_person.swap_item",
            first_person_shield_block: "animation.player.first_person.shield_block",
            first_person_attack_controller: "controller.animation.player.first_person_attack",
            first_person_attack_rotation: "animation.player.first_person.attack_rotation",
            first_person_vr_attack_rotation: "animation.player.first_person.vr_attack_rotation",
            first_person_walk: "animation.player.first_person.walk",
            first_person_map_controller: "controller.animation.player.first_person_map",
            first_person_map_hold: "animation.player.first_person.map_hold",
            first_person_map_hold_attack: "animation.player.first_person.map_hold_attack",
            first_person_map_hold_off_hand: "animation.player.first_person.map_hold_off_hand",
            first_person_map_hold_main_hand: "animation.player.first_person.map_hold_main_hand",
            first_person_crossbow_equipped: "animation.player.first_person.crossbow_equipped",
            first_person_crossbow_hold: "animation.player.first_person.crossbow_hold",
            first_person_breathing_bob: "animation.player.first_person.breathing_bob",
            third_person_crossbow_equipped: "animation.player.crossbow_equipped",
            third_person_bow_equipped: "animation.player.bow_equipped",
            fishing_rod: "animation.humanoid.fishing_rod",
            first_person_melee_spear_use: "animation.player.first_person.melee_spear_use",
            first_person_melee_spear_hold: "animation.player.first_person.melee_spear_hold",
            first_person_melee_spear_attack: "animation.player.first_person.melee_spear_attack",
            first_person_melee_spear_controller: "controller.animation.player.first_person_melee_spear",
            third_person_melee_spear_use: "animation.humanoid.melee_spear_use",
            third_person_melee_spear_hold: "animation.humanoid.melee_spear_hold",
            third_person_melee_spear_attack: "animation.player.melee_spear_attack",
            third_person_melee_spear_controller: "controller.animation.player.melee_spear",
            crossbow_hold: "animation.player.crossbow_hold",
            crossbow_controller: "controller.animation.player.crossbow",
            shield_block_main_hand: "animation.player.shield_block_main_hand",
            shield_block_off_hand: "animation.player.shield_block_off_hand",
            blink: "controller.animation.persona.blink",
            tooting_goat_horn: "animation.humanoid.tooting_goat_horn",
            holding_brush: "animation.humanoid.holding_brush",
            brushing: "animation.humanoid.brushing"
        },
        renderControllers: [
            {
                "controller.render.player.first_person_spectator": `${MoLang.variable("is_first_person")} && ${MoLang.isSpectator()}`
            },
            {
                "controller.render.player.third_person_spectator": `!${MoLang.variable("is_first_person")} && !${MoLang.variable("map_face_icon")} && ${MoLang.isSpectator()}`
            },
            {
                "controller.render.player.first_person": `${MoLang.variable("is_first_person")} && !${MoLang.isSpectator()}`
            },
            {
                "controller.render.player.third_person": `!${MoLang.variable("is_first_person")} && !${MoLang.variable("map_face_icon")} && !${MoLang.isSpectator()}`
            },
            { "controller.render.player.map": MoLang.variable("map_face_icon") }
        ],
        enableAttachables: true
    }
});
