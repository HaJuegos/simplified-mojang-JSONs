import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const DrownedV1Entity = createRPEntityClient({
    idEntity: "minecraft:drowned",
    params: {
        materials: { default: "drowned" },
        textures: { default: "textures/entity/zombie/drowned" },
        geometry: { default: "geometry.zombie.drowned" },
        scripts: {
            preAnimation: [
                `variable.tcos0 = (Math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * ${MoLang.modifiedMoveSpeed()} / variable.gliding_speed_value) * 57.3;`
            ],
            animate: [
                { humanoid_big_head: MoLang.isBaby() },
                "humanoid_base_pose",
                "look_at_target",
                "move",
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
            ]
        },
        animations: {
            humanoid_big_head: "animation.humanoid.big_head.v1.0",
            humanoid_base_pose: "animation.humanoid.base_pose.v1.0",
            look_at_target: "controller.animation.humanoid.look_at_target",
            look_at_target_default: "animation.humanoid.look_at_target.default.v1.0",
            look_at_target_gliding: "animation.humanoid.look_at_target.gliding.v1.0",
            look_at_target_swimming: "animation.humanoid.look_at_target.swimming.v1.0",
            move: "animation.humanoid.move.v1.0",
            "riding.arms": "animation.humanoid.riding.arms.v1.0",
            "riding.legs": "animation.humanoid.riding.legs.v1.0",
            holding: "animation.humanoid.holding.v1.0",
            brandish_spear: "animation.humanoid.brandish_spear.v1.0",
            charging: "animation.humanoid.charging.v1.0",
            bob: "animation.humanoid.bob.v1.0",
            damage_nearby_mobs: "animation.humanoid.damage_nearby_mobs.v1.0",
            use_item_progress: "animation.humanoid.use_item_progress.v1.0",
            attack_controller: "controller.animation.drowned.attack.rotations",
            zombie_attack_bare_hand: "animation.zombie.attack_bare_hand",
            attack_rotations: "animation.drowned.attack.rotations.v1.0",
            swimming: "animation.drowned.swimming.v1.0"
        },
        renderControllers: ["controller.render.drowned"],
        enableAttachables: true,
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 48
        }
    }
});
