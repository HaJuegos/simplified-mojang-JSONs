import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const PillagerEntity = createRPEntityClient({
    idEntity: "minecraft:pillager",
    params: {
        materials: { default: "pillager" },
        textures: { default: "textures/entity/pillager" },
        geometry: { default: "geometry.pillager" },
        spawnEgg: { texture: "spawn_egg_pillager" },
        scripts: {
            preAnimation: [
                `variable.tcos0 = (Math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * ${MoLang.modifiedMoveSpeed()} / variable.gliding_speed_value) * 57.3;`,
                `${MoLang.variable("riding_y_offset_with_respect_to_player")} = 1.25;`,
                `${MoLang.variable("riding_y_offset_on_vehicle_where_other_entites_can_stand")} = ${MoLang.isRidingAnyEntityOfType("minecraft:minecart", "minecraft:boat", "minecraft:chest_boat")} ? -3.0 : 0.0;`,
                `${MoLang.variable("riding_y_offset")} = ${MoLang.variable("riding_y_offset_with_respect_to_player")} + ${MoLang.variable("riding_y_offset_on_vehicle_where_other_entites_can_stand")};`
            ],
            animate: ["pillager_root_controller"]
        },
        animations: {
            humanoid_base_pose: "animation.humanoid.base_pose",
            look_at_target_default: "animation.humanoid.look_at_target.default",
            look_at_target_gliding: "animation.humanoid.look_at_target.gliding",
            look_at_target_swimming: "animation.humanoid.look_at_target.swimming",
            move: "animation.humanoid.move",
            "riding.arms": "animation.humanoid.riding.arms",
            "riding.legs": "animation.humanoid.riding.legs",
            holding: "animation.humanoid.holding",
            "attack.rotations": "animation.humanoid.attack.rotations",
            bob: "animation.humanoid.bob",
            crossbow_hold: "animation.pillager.crossbow.hold",
            crossbow_charge: "animation.pillager.crossbow.charge",
            celebrating: "animation.humanoid.celebrating",
            controller_humanoid_base_pose: "controller.animation.humanoid.base_pose",
            controller_look_at_target: "controller.animation.humanoid.look_at_target",
            controller_move: "controller.animation.humanoid.move",
            controller_riding: "controller.animation.humanoid.riding",
            controller_attack: "controller.animation.humanoid.attack",
            controller_bob: "controller.animation.humanoid.bob",
            controller_pillager_attack: "controller.animation.pillager.attack",
            pillager_root_controller: "controller.animation.pillager.root",
            "riding.body": "animation.humanoid.riding.body"
        },
        renderControllers: ["controller.render.pillager"],
        enableAttachables: true,
        hideArmor: true
    }
});
