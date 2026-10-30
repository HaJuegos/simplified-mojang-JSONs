import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const IronGolemEntity = createRPEntityClient({
    idEntity: "minecraft:iron_golem",
    params: {
        materials: { default: "iron_golem" },
        textures: {
            default: "textures/entity/iron_golem",
            cracked_high: "textures/entity/iron_golem/cracked_high",
            cracked_med: "textures/entity/iron_golem/cracked_medium",
            cracked_low: "textures/entity/iron_golem/cracked_low",
            cracked_none: "textures/entity/iron_golem/cracked_none"
        },
        geometry: { default: "geometry.irongolem" },
        animations: {
            walk: "animation.iron_golem.walk",
            move: "animation.iron_golem.move",
            attack: "animation.iron_golem.attack",
            flower: "animation.iron_golem.flower",
            look_at_target: "animation.common.look_at_target",
            walk_to_target: "animation.iron_golem.walk_to_target",
            move_to_target: "animation.iron_golem.move_to_target",
            move_controller: "controller.animation.iron_golem.move",
            arm_controller: "controller.animation.iron_golem.arm_movement",
            controller_move: "controller.animation.iron_golem.move",
            controller_arm: "controller.animation.iron_golem.arm_movement"
        },
        renderControllers: ["controller.render.iron_golem", "controller.render.iron_golem_cracks"],
        scripts: {
            preAnimation: [
                `variable.modified_tcos0 = Math.clamp(((Math.cos(${MoLang.modifiedDistanceMoved()} * 13.5) * Math.min(${MoLang.modifiedMoveSpeed()}, 0.6) / variable.gliding_speed_value) * 25.0), -12.5, 12.5);`
            ],
            animate: ["look_at_target", "move_controller", "arm_controller", "controller_move", "controller_arm"]
        },
        spawnEgg: { texture: "spawn_egg_iron_golem" }
    }
});
