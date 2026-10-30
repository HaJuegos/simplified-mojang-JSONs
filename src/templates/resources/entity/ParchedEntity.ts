import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const ParchedEntity = createRPEntityClient({
    idEntity: "minecraft:parched",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_12_0,
        materials: { default: "entity_alphatest" },
        textures: { default: "textures/entity/parched/parched" },
        geometry: { default: "geometry.parched" },
        animations: {
            look_at_target_default: "animation.humanoid.look_at_target.default",
            look_at_target_controller: "controller.animation.humanoid.look_at_target",
            look_at_target_gliding: "animation.humanoid.look_at_target.gliding",
            look_at_target_swimming: "animation.humanoid.look_at_target.swimming",
            move: "animation.humanoid.move",
            move_controller: "controller.animation.humanoid.move",
            "riding.arms": "animation.humanoid.riding.arms",
            "riding.legs": "animation.humanoid.riding.legs",
            "riding.body": "animation.humanoid.riding.body",
            riding_controller: "controller.animation.humanoid.riding",
            holding: "animation.humanoid.holding",
            holding_controller: "controller.animation.humanoid.holding",
            brandish_spear: "animation.humanoid.brandish_spear",
            brandish_spear_controller: "controller.animation.humanoid.brandish_spear",
            charging: "animation.humanoid.charging",
            charging_controller: "controller.animation.humanoid.charging",
            "attack.rotations": "animation.humanoid.attack.rotations",
            attack_controller: "controller.animation.humanoid.attack",
            sneaking: "animation.humanoid.sneaking",
            sneaking_controller: "controller.animation.humanoid.sneaking",
            bob: "animation.humanoid.bob",
            bob_controller: "controller.animation.humanoid.bob",
            damage_nearby_mobs: "animation.humanoid.damage_nearby_mobs",
            damage_nearby_mobs_controller: "controller.animation.humanoid.damage_nearby_mobs",
            bow_and_arrow: "animation.humanoid.bow_and_arrow",
            bow_and_arrow_controller: "controller.animation.humanoid.bow_and_arrow",
            swimming: "animation.zombie.swimming",
            swimming_controller: "controller.animation.zombie.swimming",
            use_item_progress: "animation.humanoid.use_item_progress",
            use_item_progress_controller: "controller.animation.humanoid.use_item_progress",
            skeleton_attack: "animation.skeleton.attack",
            skeleton_attack_controller: "controller.animation.skeleton.attack"
        },
        scripts: {
            preAnimation: [
                `variable.tcos0 = (Math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * ${MoLang.modifiedMoveSpeed()} / variable.gliding_speed_value) * 57.3;`,
                `${MoLang.variable("riding_y_offset_with_respect_to_player")} = 0.5;`,
                `${MoLang.variable("riding_y_offset_on_vehicle_where_other_entites_can_stand")} = ${MoLang.isRidingAnyEntityOfType("minecraft:minecart", "minecraft:boat", "minecraft:chest_boat")} ? -3.0 : 0.0;`,
                `${MoLang.variable("riding_y_offset")} = ${MoLang.variable("riding_y_offset_with_respect_to_player")} + ${MoLang.variable("riding_y_offset_on_vehicle_where_other_entites_can_stand")};`
            ],
            animate: [
                "look_at_target_controller",
                "move_controller",
                "riding_controller",
                "holding_controller",
                "brandish_spear_controller",
                "charging_controller",
                "attack_controller",
                "sneaking_controller",
                "bob_controller",
                "damage_nearby_mobs_controller",
                "bow_and_arrow_controller",
                "swimming_controller",
                "use_item_progress_controller",
                "skeleton_attack_controller"
            ]
        },
        renderControllers: ["controller.render.default"],
        enableAttachables: true,
        spawnEgg: { texture: "spawn_egg_parched" }
    }
});
