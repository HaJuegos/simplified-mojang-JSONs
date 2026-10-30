import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const PhantomEntity = createRPEntityClient({
    idEntity: "minecraft:phantom",
    params: {
        materials: {
            default: "phantom",
            invisible: "phantom_invisible"
        },
        textures: { default: "textures/entity/phantom" },
        geometry: { default: "geometry.phantom" },
        scripts: {
            preAnimation: [
                `variable.wingRotZ = 16.0 * Math.sin((variable.RuntimeID * 3 + ${MoLang.lifeTime()} * 20.0) * 7.448454);`,
                `variable.tailRotX = -5.0 * Math.sin((variable.RuntimeID * 3 + ${MoLang.lifeTime()} * 20.0) * 14.896908) - 5.0;`
            ],
            initialize: [
                `${MoLang.variable("runtimeid")} = 0;`,
                `${MoLang.variable("tailrotx")} = -5.0;`,
                `${MoLang.variable("wingrotz")} = 0.0;`
            ],
            animate: ["phantom_base_pose_controller", "move", "controller_phantom_base_pose", "controller_move"],
            shouldUpdateEffectsOffscreen: "1.0"
        },
        animations: {
            phantom_base_pose: "animation.phantom.base_pose",
            move: "animation.phantom.move",
            phantom_base_pose_controller: "controller.animation.phantom.base_pose",
            controller_phantom_base_pose: "controller.animation.phantom.base_pose",
            controller_move: "controller.animation.phantom.move"
        },
        particleEffects: { wing_dust: "minecraft:phantom_trail_particle" },
        renderControllers: ["controller.render.phantom"],
        spawnEgg: { texture: "spawn_egg_phantom" }
    }
});
