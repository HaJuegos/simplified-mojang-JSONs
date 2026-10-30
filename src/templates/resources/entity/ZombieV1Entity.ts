import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const ZombieV1Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:zombie",
    params: {
        materials: { default: "zombie" },
        textures: { default: "textures/entity/zombie/zombie" },
        geometry: { default: "geometry.zombie" },
        scripts: {
            preAnimation: [
                `variable.tcos0 = (Math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * ${MoLang.modifiedMoveSpeed()} / variable.gliding_speed_value) * 57.3;`
            ],
            animate: [
                "controller_humanoid_baby_big_head",
                "controller_humanoid_base_pose",
                "controller_look_at_target",
                "controller_move",
                "controller_riding",
                "controller_holding",
                "controller_brandish_spear",
                "controller_charging",
                "controller_attack",
                "controller_sneaking",
                "controller_bob",
                "controller_damage_nearby_mobs",
                "controller_bow_and_arrow",
                "controller_swimming",
                "controller_use_item_progress",
                "controller_zombie_attack_bare_hand",
                "controller_zombie_swimming"
            ]
        },
        animations: {
            humanoid_big_head: "animation.humanoid.big_head",
            humanoid_base_pose: "animation.humanoid.base_pose.v1.0",
            look_at_target_default: "animation.humanoid.look_at_target.default.v1.0",
            look_at_target_gliding: "animation.humanoid.look_at_target.gliding.v1.0",
            look_at_target_swimming: "animation.humanoid.look_at_target.swimming.v1.0",
            move: "animation.humanoid.move.v1.0",
            "riding.arms": "animation.humanoid.riding.arms.v1.0",
            "riding.legs": "animation.humanoid.riding.legs.v1.0",
            holding: "animation.humanoid.holding.v1.0",
            brandish_spear: "animation.humanoid.brandish_spear.v1.0",
            charging: "animation.humanoid.charging.v1.0",
            "attack.rotations": "animation.humanoid.attack.rotations.v1.0",
            sneaking: "animation.humanoid.sneaking.v1.0",
            bob: "animation.humanoid.bob.v1.0",
            damage_nearby_mobs: "animation.humanoid.damage_nearby_mobs.v1.0",
            bow_and_arrow: "animation.humanoid.bow_and_arrow.v1.0",
            swimming: "animation.humanoid.swimming.v1.0",
            use_item_progress: "animation.humanoid.use_item_progress.v1.0",
            zombie_attack_bare_hand: "animation.zombie.attack_bare_hand",
            zombie_swimming: "animation.zombie.swimming",
            controller_humanoid_baby_big_head: "controller.animation.humanoid.baby_big_head",
            controller_humanoid_base_pose: "controller.animation.humanoid.base_pose",
            controller_look_at_target: "controller.animation.humanoid.look_at_target",
            controller_move: "controller.animation.humanoid.move",
            controller_riding: "controller.animation.humanoid.riding",
            controller_holding: "controller.animation.humanoid.holding",
            controller_brandish_spear: "controller.animation.humanoid.brandish_spear",
            controller_charging: "controller.animation.humanoid.charging",
            controller_attack: "controller.animation.humanoid.attack",
            controller_sneaking: "controller.animation.humanoid.sneaking",
            controller_bob: "controller.animation.humanoid.bob",
            controller_damage_nearby_mobs: "controller.animation.humanoid.damage_nearby_mobs",
            controller_bow_and_arrow: "controller.animation.humanoid.bow_and_arrow",
            controller_swimming: "controller.animation.humanoid.swimming",
            controller_use_item_progress: "controller.animation.humanoid.use_item_progress",
            controller_zombie_attack_bare_hand: "controller.animation.zombie.attack_bare_hand",
            controller_zombie_swimming: "controller.animation.zombie.swimming"
        },
        renderControllers: ["controller.render.zombie"],
        enableAttachables: true,
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 12
        }
    }
});
