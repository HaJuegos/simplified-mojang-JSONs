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
            initialize: [
                `${MoLang.variable("is_holding_right")} = 0.0;`,
                `${MoLang.variable("is_blinking")} = 0.0;`,
                `${MoLang.variable("last_blink_time")} = 0.0;`,
                `${MoLang.variable("hand_bob")} = 0.0;`
            ],
            preAnimation: [
                `${MoLang.variable("helmet_layer_visible")} = !${MoLang.hasHeadGear()};`,
                `${MoLang.variable("leg_layer_visible")} = 1.0;`,
                `${MoLang.variable("boot_layer_visible")} = 1.0;`,
                `${MoLang.variable("chest_layer_visible")} = 1.0;`,
                "variable.attack_body_rot_y = Math.sin(360*Math.sqrt(variable.attack_time)) * 5.0;",
                `${MoLang.variable("tcos0")} = (${MoLang.cos(`${MoLang.modifiedDistanceMoved()} * 38.17`)} * ${MoLang.modifiedMoveSpeed()} / ${MoLang.variable("gliding_speed_value")}) * 57.3;`,
                `${MoLang.variable("first_person_rotation_factor")} = ${MoLang.sin(`(1 - ${MoLang.variable("attack_time")}) * 180.0`)};`,
                `${MoLang.variable("hand_bob")} = ${MoLang.lifeTime()} < 0.01 ? 0.0 : ${MoLang.variable("hand_bob")} + ((${MoLang.isOnGround()} && ${MoLang.isAlive()} ? ${MoLang.max(0.0, MoLang.min(MoLang.sqrt(`${MoLang.pow(MoLang.positionDelta(0), 2.0)} + ${MoLang.pow(MoLang.positionDelta(2), 2.0)}`), 0.1))} : 0.0) - ${MoLang.variable("hand_bob")}) * 0.02;`,
                `${MoLang.variable("map_angle")} = ${MoLang.max(0.0, MoLang.min(`1 - ${MoLang.variable("player_x_rotation")} / 45.1`, 1.0))};`,
                `${MoLang.variable("item_use_normalized")} = ${MoLang.mainHandItemUseDuration()} / ${MoLang.mainHandItemMaxDuration()};`,
                `${MoLang.variable("riding_y_offset")} = ${MoLang.isRidingAnyEntityOfType("minecraft:minecart", "minecraft:boat", "minecraft:chest_boat", "minecraft:strider")} ? -3.0 : 0.0;`
            ],
            animate: ["root"],
            variables: {
                "variable.fpMeleeSpearUseAttachableRotationZ": "public",
                "variable.tpMeleeSpearUseAttachableRotationZ": "public",
                "variable.fpMeleeSpearAttackAttachableRotationZ": "public",
                "variable.tpMeleeSpearAttackAttachablePositionZ": "public",
                "variable.attackTime": "public",
                "variable.itemUseNormalized": "public"
            },
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
            "swimming.legs": "animation.player.swim.legs",
            "riding.arms": "animation.player.riding.arms",
            "riding.legs": "animation.player.riding.legs",
            holding: "animation.player.holding",
            brandish_spear: "animation.humanoid.brandish_spear",
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
            first_person_attack_controller: "controller.animation.player.first_person_attack",
            first_person_attack_rotation: "animation.player.first_person.attack_rotation",
            first_person_attack_rotation_item: "animation.player.first_person.attack_rotation_item",
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
            crossbow_hold: "animation.player.crossbow_hold",
            crossbow_controller: "controller.animation.player.crossbow",
            shield_block_main_hand: "animation.player.shield_block_main_hand",
            shield_block_off_hand: "animation.player.shield_block_off_hand",
            blink: "controller.animation.persona.blink",
            fishing_rod: "animation.humanoid.fishing_rod",
            holding_spyglass: "animation.humanoid.holding_spyglass",
            first_person_shield_block: "animation.player.first_person.shield_block",
            tooting_goat_horn: "animation.humanoid.tooting_goat_horn",
            holding_brush: "animation.humanoid.holding_brush",
            brushing: "animation.humanoid.brushing",
            crawling: "animation.player.crawl",
            "crawling.legs": "animation.player.crawl.legs",
            "swimming.no_right_arm": "animation.player.swim.no_right_arm",
            "crawling.no_right_arm": "animation.player.crawl.no_right_arm",
            "riding.root": "animation.player.riding.root",
            holding_heavy_core: "animation.player.holding_heavy_core",
            first_person_melee_spear_use: "animation.player.first_person.melee_spear_use",
            first_person_melee_spear_hold: "animation.player.first_person.melee_spear_hold",
            first_person_melee_spear_attack: "animation.player.first_person.melee_spear_attack",
            first_person_melee_spear_controller: "controller.animation.player.first_person_melee_spear",
            third_person_melee_spear_use: "animation.humanoid.melee_spear_use",
            third_person_melee_spear_hold: "animation.humanoid.melee_spear_hold",
            third_person_melee_spear_attack: "animation.player.melee_spear_attack",
            third_person_melee_spear_controller: "controller.animation.player.melee_spear"
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
