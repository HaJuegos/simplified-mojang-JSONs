import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const AgentEntity = createRPEntityClient({
    idEntity: "minecraft:agent",
    params: {
        materials: {
            default: "agent"
        },
        textures: {
            default: "textures/entity/agent"
        },
        geometry: {
            default: "geometry.agent"
        },
        scripts: {
            preAnimation: [
                `variable.Agent.ArmZRotation = (Math.cos(${MoLang.lifeTime()} * 114.6) + 1.0) * 1.15;`,
                `variable.Agent.ArmXRotationFactor = Math.sin(${MoLang.lifeTime()} * 80.0) * 4.6;`,
                `variable.Agent.LegXRotationFactor = Math.sin(${MoLang.lifeTime()} * 46.0) * 1.15;`
            ],
            animate: [
                "look_at_target",
                "move_controller"
            ]
        },
        animations: {
            look_at_target: "animation.common.look_at_target",
            move: "animation.agent.move",
            swing_arms: "animation.agent.swing_arms",
            shrug: "animation.agent.shrug",
            move_controller: "controller.animation.agent.move"
        },
        renderControllers: [
            "controller.render.agent"
        ],
        spawnEgg: {
            texture: "spawn_egg_agent"
        }
    }
});
