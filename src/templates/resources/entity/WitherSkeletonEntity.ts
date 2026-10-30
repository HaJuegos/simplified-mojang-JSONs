import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const WitherSkeletonEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:wither_skeleton",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: { default: "skeleton" },
        textures: { default: "textures/entity/skeleton/wither_skeleton" },
        geometry: { default: "geometry.skeleton.wither.v1.8" },
        scripts: {
            preAnimation: [
                `variable.tcos0 = (Math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * ${MoLang.modifiedMoveSpeed()} / variable.gliding_speed_value) * 57.3;`,
                `${MoLang.variable("riding_y_offset_with_respect_to_player")} = -1.0;`,
                `${MoLang.variable("riding_y_offset_on_vehicle_where_other_entites_can_stand")} = ${MoLang.isRidingAnyEntityOfType("minecraft:minecart", "minecraft:boat", "minecraft:chest_boat")} ? -3.0 : 0.0;`,
                `${MoLang.variable("riding_y_offset")} = ${MoLang.variable("riding_y_offset_with_respect_to_player")} + ${MoLang.variable("riding_y_offset_on_vehicle_where_other_entites_can_stand")};`
            ],
            animate: [
                "controller_look_at_target",
                "controller_move",
                "controller_riding",
                "controller_holding",
                "controller_brandish_spear",
                "controller_charging",
                "controller_attack",
                "controller_sneaking",
                "controller_damage_nearby_mobs",
                "controller_bow_and_arrow",
                "controller_use_item_progress",
                "controller_wither_skeleton_attack",
                "controller_swimming"
            ]
        },
        animations: {
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
            wither_skeleton_attack: "animation.wither_skeleton.attack",
            swimming: "animation.zombie.swimming",
            "riding.body": "animation.humanoid.riding.body",
            controller_look_at_target: "controller.animation.humanoid.look_at_target",
            controller_move: "controller.animation.humanoid.move",
            controller_riding: "controller.animation.humanoid.riding",
            controller_holding: "controller.animation.humanoid.holding",
            controller_brandish_spear: "controller.animation.humanoid.brandish_spear",
            controller_charging: "controller.animation.humanoid.charging",
            controller_attack: "controller.animation.humanoid.attack",
            controller_sneaking: "controller.animation.humanoid.sneaking",
            controller_damage_nearby_mobs: "controller.animation.humanoid.damage_nearby_mobs",
            controller_bow_and_arrow: "controller.animation.humanoid.bow_and_arrow",
            controller_use_item_progress: "controller.animation.humanoid.use_item_progress",
            controller_wither_skeleton_attack: "controller.animation.wither_skeleton.attack",
            controller_swimming: "controller.animation.zombie.swimming"
        },
        renderControllers: ["controller.render.wither_skeleton"],
        spawnEgg: { texture: "spawn_egg_wither_skeleton" },
        enableAttachables: true
    }
});
