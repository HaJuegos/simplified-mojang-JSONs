import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const PiglinEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.MostRecent,
    idEntity: "minecraft:piglin",
    params: {
        materials: { default: "piglin" },
        textures: {
            default: "textures/entity/piglin/piglin",
            baby: "textures/entity/piglin/piglin_baby"
        },
        geometry: {
            default: "geometry.piglin",
            baby: "geometry.piglin.baby"
        },
        spawnEgg: { texture: "spawn_egg_piglin" },
        scripts: {
            preAnimation: [
                "v.use_dedicated_baby_armor = true;",
                `v.tcos0 = (Math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * ${MoLang.modifiedMoveSpeed()} / v.gliding_speed_value) * 57.3;`,
                "v.attack = Math.sin((1.0 - (1.0 - v.attack_time) * (1.0 - v.attack_time)) * 180.0) * 57.3;",
                "v.attack2 = Math.sin(v.attack_time * 180.0) * 57.3;",
                `v.z_bob = Math.cos(${MoLang.lifeTime()} * 103.13244) * 2.865 + 2.865;`,
                `v.x_bob = Math.sin(${MoLang.lifeTime()} * 76.776372) * 2.865;`,
                `${MoLang.variable("riding_y_offset_baby_scaling")} = ${MoLang.isBaby()} ? -0.5 : 0.0;`,
                `${MoLang.variable("riding_y_offset_with_respect_to_player")} = 1.0;`,
                `${MoLang.variable("riding_y_offset_on_vehicle_where_other_entites_can_stand")} = ${MoLang.isRidingAnyEntityOfType("minecraft:minecart", "minecraft:boat", "minecraft:chest_boat")} ? -3.0 : 0.0;`,
                `${MoLang.variable("unscaled_riding_y_offset")} = ${MoLang.variable("riding_y_offset_with_respect_to_player")} + ${MoLang.variable("riding_y_offset_on_vehicle_where_other_entites_can_stand")};`,
                `${MoLang.variable("riding_y_offset")} = ${MoLang.variable("riding_y_offset_baby_scaling")} * ${MoLang.abs(MoLang.variable("unscaled_riding_y_offset"))} + ${MoLang.variable("unscaled_riding_y_offset")} + ${MoLang.variable("riding_y_offset_baby_scaling")} * 0.2f;`,
                `v.item_use_duration = ${MoLang.isUsingItem()} ? ((v.item_use_duration ?? 0.0) + ${MoLang.deltaTime()} * 20.0) : 0.0;`,
                `${MoLang.variable("item_use_normalized")} = ${MoLang.variable("item_use_duration")} / ${MoLang.mainHandItemMaxDuration()};`,
                `${MoLang.variable("melee_spear_equipped")} = ${MoLang.equippedItemAnyTag("slot.weapon.mainhand", "minecraft:is_spear")};`,
                "(v.melee_spear_equipped) ? {",
                `${MoLang.temp("melee_spear_use_finish_raise_tick")} = ${MoLang.kineticWeaponDelay()};`,
                `${MoLang.temp("melee_spear_use_finish_sway_tick")} = ${MoLang.temp("melee_spear_use_finish_raise_tick")} + ${MoLang.kineticWeaponDismountDuration()};`,
                `${MoLang.temp("melee_spear_use_start_sway_tick")} = ${MoLang.temp("melee_spear_use_finish_sway_tick")} - 20.0;`,
                `${MoLang.temp("melee_spear_use_finish_lower_tick")} = ${MoLang.temp("melee_spear_use_finish_raise_tick")} + ${MoLang.kineticWeaponKnockbackDuration()};`,
                `${MoLang.temp("melee_spear_use_start_lower_tick")} = ${MoLang.temp("melee_spear_use_finish_lower_tick")} - 40.0;`,
                `${MoLang.temp("melee_spear_use_finish_raise_back_tick")} = ${MoLang.temp("melee_spear_use_finish_raise_tick")} + ${MoLang.kineticWeaponDamageDuration()};`,
                `${MoLang.temp("melee_spear_use_start_raise_back_tick")} = ${MoLang.temp("melee_spear_use_finish_raise_back_tick")} - 5.0;`,
                "  t.melee_spear_use_raise_progress = math.clamp(math.inverse_lerp(0.0, t.melee_spear_use_finish_raise_tick, v.item_use_duration), 0.0, 1.0);",
                "  t.melee_spear_use_raise_progress_start = math.clamp(math.inverse_lerp(0.0, 0.5, t.melee_spear_use_raise_progress), 0.0, 1.0);",
                "  t.melee_spear_use_raise_progress_middle = math.clamp(math.inverse_lerp(0.5, 0.8, t.melee_spear_use_raise_progress), 0.0, 1.0);",
                "  t.melee_spear_use_raise_progress_end = math.clamp(math.inverse_lerp(0.8, 1.0, t.melee_spear_use_raise_progress), 0.0, 1.0);",
                "  t.melee_spear_use_sway_progress = math.clamp(math.inverse_lerp(t.melee_spear_use_start_sway_tick, t.melee_spear_use_finish_sway_tick, v.item_use_duration), 0.0, 1.0);",
                "  t.melee_spear_use_lower_progress = math.ease_in_out_elastic(0.0, 1.0, math.clamp(math.inverse_lerp(t.melee_spear_use_start_lower_tick, t.melee_spear_use_finish_lower_tick, v.item_use_duration - 20.0), 0.0, 1.0));",
                "  t.melee_spear_use_raise_back_progress = math.clamp(math.inverse_lerp(t.melee_spear_use_start_raise_back_tick, t.melee_spear_use_finish_raise_back_tick, v.item_use_duration), 0.0, 1.0);",
                "  t.melee_spear_use_sway_intensity = math.ease_out_circ(0.0, 2.0, t.melee_spear_use_sway_progress) + math.ease_in_circ(0.0, -2.0, t.melee_spear_use_raise_back_progress);",
                `${MoLang.temp("melee_spear_use_sway_scale_slow")} = ${MoLang.sin(`${MoLang.variable("item_use_duration")} * 19.0`)} * ${MoLang.temp("melee_spear_use_sway_intensity")};`,
                `${MoLang.temp("melee_spear_use_sway_scale_fast")} = ${MoLang.sin(`${MoLang.variable("item_use_duration")} * 30.0`)} * ${MoLang.temp("melee_spear_use_sway_intensity")};`,
                `${MoLang.variable("tp_melee_spear_use_arm_rotation_x")} = ${MoLang.temp("melee_spear_use_raise_progress_start")} * -40.0 + ${MoLang.temp("melee_spear_use_raise_progress_middle")} * 30.0 + ${MoLang.temp("melee_spear_use_raise_progress_end")} * -20.0 + ${MoLang.temp("melee_spear_use_lower_progress")} * 20.0 + ${MoLang.temp("melee_spear_use_raise_back_progress")} * 10.0;`,
                `${MoLang.variable("tp_melee_spear_use_arm_rotation_x")} = ${MoLang.variable("tp_melee_spear_use_arm_rotation_x")} + ${MoLang.temp("melee_spear_use_sway_scale_slow")} * 0.6;`,
                `${MoLang.variable("tp_melee_spear_use_arm_rotation_y")} = ${MoLang.temp("melee_spear_use_sway_scale_fast")} * 1.0;`,
                `${MoLang.variable("tp_melee_spear_use_arm_rotation_z")} = ${MoLang.temp("melee_spear_use_sway_scale_slow")} * 0.5;`,
                `${MoLang.variable("tp_melee_spear_use_item_rotation_x")} = ${MoLang.temp("melee_spear_use_raise_progress")} * 60.0 + ${MoLang.temp("melee_spear_use_raise_back_progress")} * -60.0;`,
                `${MoLang.variable("tp_melee_spear_use_attachable_rotation_z")} = ${MoLang.temp("melee_spear_use_raise_progress")} * 90.0 + ${MoLang.temp("melee_spear_use_sway_progress")} * -90.0;`,
                "};"
            ],
            animate: [
                "move",
                "bob",
                { admire: MoLang.isAdmiring() },
                { celebrate_hunt: MoLang.isCelebrating() },
                { celebrate_hunt_special: MoLang.isCelebratingSpecial() },
                "look_at_target_controller",
                "piglin_attack_controller",
                "riding_controller",
                {
                    melee_spear_controller: `${MoLang.variable("melee_spear_equipped")} && !${MoLang.isAdmiring()} && !${MoLang.isCelebrating()} && !${MoLang.isCelebratingSpecial()}`
                }
            ],
            variables: {
                "variable.itemUseNormalized": "public",
                "variable.tpMeleeSpearUseAttachableRotationZ": "public",
                "variable.useDedicatedBabyArmor": "public"
            },
            initialize: [`${MoLang.variable("tp_melee_spear_base_arm_rotation_x")} = -30.0;`],
            shouldUpdateEffectsOffscreen: "1.0",
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`
        },
        animations: {
            move: "animation.piglin.move",
            bob: "animation.humanoid.bob",
            humanoid_big_head: "animation.humanoid.big_head",
            admire: "animation.piglin.admire",
            celebrate_hunt: "animation.piglin.celebrate_hunt",
            celebrate_hunt_special: "animation.piglin.celebrate_hunt_special",
            look_at_target_controller: "controller.animation.humanoid.look_at_target",
            look_at_target_default: "animation.humanoid.look_at_target.default",
            look_at_target_gliding: "animation.humanoid.look_at_target.gliding",
            look_at_target_swimming: "animation.humanoid.look_at_target.swimming",
            piglin_attack_controller: "controller.animation.piglin.attack",
            crossbow_hold: "animation.piglin.crossbow.hold",
            crossbow_charge: "animation.piglin.crossbow.charge",
            melee_attack: "animation.piglin.sword.attack",
            hand_attack: "animation.piglin.hand.attack",
            riding_controller: "controller.animation.humanoid.riding",
            "riding.arms": "animation.humanoid.riding.arms",
            "riding.legs": "animation.humanoid.riding.legs",
            "riding.body": "animation.humanoid.riding.body",
            melee_spear_use: "animation.humanoid.melee_spear_use",
            melee_spear_hold: "animation.humanoid.melee_spear_hold",
            melee_spear_controller: "controller.animation.humanoid.melee_spear"
        },
        renderControllers: ["controller.render.piglin.v2"],
        enableAttachables: true
    }
});
