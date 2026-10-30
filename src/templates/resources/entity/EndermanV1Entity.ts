import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const EndermanV1Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:enderman",
    params: {
        materials: {
            default: "enderman",
            invisible: "enderman_invisible"
        },
        textures: { default: "textures/entity/enderman/enderman" },
        geometry: { default: "geometry.enderman" },
        scripts: {
            preAnimation: [
                `variable.tcos0 = (Math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * ${MoLang.modifiedMoveSpeed()} / variable.gliding_speed_value) * 28.65;`
            ],
            animate: [
                "controller_look_at_target",
                "controller_move",
                "controller_attack",
                "controller_bob",
                "controller_base_pose",
                "controller_carrying",
                "controller_scary_face"
            ]
        },
        animations: {
            look_at_target_default: "animation.humanoid.look_at_target.default",
            look_at_target_gliding: "animation.humanoid.look_at_target.gliding",
            look_at_target_swimming: "animation.humanoid.look_at_target.swimming",
            move: "animation.humanoid.move",
            "attack.rotations": "animation.humanoid.attack.rotations",
            bob: "animation.humanoid.bob",
            base_pose: "animation.enderman.base_pose_v1.0",
            arms_legs: "animation.enderman.arms_legs",
            carrying: "animation.enderman.carrying",
            scary_face: "animation.enderman.scary_face_v1.0",
            controller_look_at_target: "controller.animation.humanoid.look_at_target",
            controller_move: "controller.animation.humanoid.move",
            controller_attack: "controller.animation.humanoid.attack",
            controller_bob: "controller.animation.humanoid.bob",
            controller_base_pose: "controller.animation.enderman.base_pose",
            controller_carrying: "controller.animation.enderman.carrying",
            controller_scary_face: "controller.animation.enderman.scary_face"
        },
        renderControllers: ["controller.render.enderman"],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 7
        }
    }
});
