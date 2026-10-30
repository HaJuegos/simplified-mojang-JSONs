import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const ZombieVillagerEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:zombie_villager",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: { default: "zombie_villager" },
        textures: {
            smith: "textures/entity/zombie_villager/zombie_smith",
            butcher: "textures/entity/zombie_villager/zombie_butcher",
            librarian: "textures/entity/zombie_villager/zombie_librarian",
            priest: "textures/entity/zombie_villager/zombie_priest",
            farmer: "textures/entity/zombie_villager/zombie_farmer"
        },
        geometry: { default: "geometry.zombie.villager.v1.8" },
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
                "controller_use_item_progress",
                "controller_zombie_attack_bare_hand",
                "controller_swimming"
            ]
        },
        animations: {
            humanoid_big_head: "animation.humanoid.big_head",
            humanoid_base_pose: "animation.humanoid.base_pose",
            look_at_target_default: "animation.humanoid.look_at_target.default",
            look_at_target_gliding: "animation.humanoid.look_at_target.gliding",
            look_at_target_swimming: "animation.humanoid.look_at_target.swimming",
            move: "animation.humanoid.move",
            "riding.arms": "animation.humanoid.riding.arms",
            "riding.legs": "animation.humanoid.riding.legs",
            holding: "animation.humanoid.holding",
            brandish_spear: "animation.humanoid.brandish_spear",
            charging: "animation.humanoid.charging",
            "attack.rotations": "animation.humanoid.attack.rotations",
            sneaking: "animation.humanoid.sneaking",
            bob: "animation.humanoid.bob",
            damage_nearby_mobs: "animation.humanoid.damage_nearby_mobs",
            bow_and_arrow: "animation.humanoid.bow_and_arrow",
            use_item_progress: "animation.humanoid.use_item_progress",
            zombie_attack_bare_hand: "animation.zombie.attack_bare_hand",
            swimming: "animation.zombie.swimming",
            "riding.body": "animation.humanoid.riding.body",
            baby_zombie_attack_bare_hand: "animation.zombie.baby_attack_bare_hand",
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
            controller_use_item_progress: "controller.animation.humanoid.use_item_progress",
            controller_zombie_attack_bare_hand: "controller.animation.zombie.attack_bare_hand",
            controller_swimming: "controller.animation.zombie.swimming"
        },
        renderControllers: ["controller.render.zombie_villager"],
        enableAttachables: true,
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 42
        }
    }
});
