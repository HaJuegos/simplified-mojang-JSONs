import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const DrownedEntity = createRPEntityClient({
    idEntity: "minecraft:drowned",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_16_0,
        materials: { default: "drowned" },
        textures: {
            default: "textures/entity/zombie/drowned",
            baby: "textures/entity/zombie/drowned_baby"
        },
        geometry: {
            default: "geometry.zombie.drowned.v1.16",
            baby: "geometry.zombie.baby"
        },
        scripts: {
            preAnimation: [
                "v.use_dedicated_baby_armor = true;",
                `variable.tcos0 = (Math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * ${MoLang.modifiedMoveSpeed()} / variable.gliding_speed_value) * 57.3;`,
                `${MoLang.variable("riding_y_offset_baby_scaling")} = ${MoLang.isBaby()} ? -0.5 : 0.0;`,
                `${MoLang.variable("riding_y_offset_with_respect_to_player")} = 1.0;`,
                `${MoLang.variable("riding_y_offset_on_vehicle_where_other_entites_can_stand")} = ${MoLang.isRidingAnyEntityOfType("minecraft:minecart", "minecraft:boat", "minecraft:chest_boat")} ? -3.0 : 0.0;`,
                `${MoLang.variable("unscaled_riding_y_offset")} = ${MoLang.variable("riding_y_offset_with_respect_to_player")} + ${MoLang.variable("riding_y_offset_on_vehicle_where_other_entites_can_stand")};`,
                `${MoLang.variable("riding_y_offset")} = ${MoLang.variable("riding_y_offset_baby_scaling")} * ${MoLang.abs(MoLang.variable("unscaled_riding_y_offset"))} + ${MoLang.variable("unscaled_riding_y_offset")} + ${MoLang.variable("riding_y_offset_baby_scaling")} * 0.2f;`
            ],
            animate: [
                "look_at_target",
                "move",
                { "riding.body": MoLang.isRiding() },
                { "riding.arms": MoLang.isRiding() },
                { "riding.legs": MoLang.isRiding() },
                "holding",
                { charging: MoLang.isCharging() },
                "attack_controller",
                { brandish_spear: MoLang.variable("is_brandishing_spear") },
                "bob",
                { damage_nearby_mobs: MoLang.variable("damage_nearby_mobs") },
                {
                    use_item_progress: `(${MoLang.variable("use_item_interval_progress")} > 0.0) || (${MoLang.variable("use_item_startup_progress")} > 0.0)`
                },
                { swimming: `${MoLang.variable("swim_amount")} > 0.0` }
            ],
            shouldUpdateEffectsOffscreen: "1.0",
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`,
            variables: { "variable.useDedicatedBabyArmor": "public" }
        },
        animations: {
            humanoid_big_head: "animation.humanoid.big_head",
            look_at_target: "controller.animation.humanoid.look_at_target",
            look_at_target_default: "animation.humanoid.look_at_target.default",
            look_at_target_gliding: "animation.humanoid.look_at_target.gliding",
            look_at_target_swimming: "animation.humanoid.look_at_target.swimming",
            move: "animation.humanoid.move",
            "riding.arms": "animation.humanoid.riding.arms",
            "riding.legs": "animation.humanoid.riding.legs",
            holding: "animation.humanoid.holding",
            brandish_spear: "animation.humanoid.brandish_spear",
            charging: "animation.humanoid.charging",
            bob: "animation.humanoid.bob",
            damage_nearby_mobs: "animation.humanoid.damage_nearby_mobs",
            use_item_progress: "animation.humanoid.use_item_progress",
            attack_controller: "controller.animation.drowned.attack.rotations",
            zombie_attack_bare_hand: "animation.zombie.attack_bare_hand",
            attack_rotations: "animation.drowned.attack.rotations",
            swimming: "animation.zombie.swimming",
            "riding.body": "animation.humanoid.riding.body",
            baby_zombie_attack_bare_hand: "animation.zombie.baby_attack_bare_hand",
            baby_attack_rotations: "animation.drowned.attack.baby_rotations"
        },
        renderControllers: ["controller.render.zombie.v2"],
        enableAttachables: true,
        spawnEgg: { texture: "spawn_egg_drowned" }
    }
});
