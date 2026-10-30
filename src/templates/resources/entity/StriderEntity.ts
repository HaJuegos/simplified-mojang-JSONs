import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const StriderEntity = createRPEntityClient({
    idEntity: "minecraft:strider",
    params: {
        materials: { default: "strider" },
        textures: {
            default: "textures/entity/strider/strider",
            saddled: "textures/entity/strider/strider_saddled",
            suffocated: "textures/entity/strider/strider_suffocated",
            suffocated_saddled: "textures/entity/strider/strider_suffocated_saddled",
            baby_default: "textures/entity/strider/strider_baby",
            baby_suffocated: "textures/entity/strider/strider_cold_baby"
        },
        geometry: {
            default: "geometry.strider",
            baby: "geometry.strider.baby"
        },
        spawnEgg: { texture: "spawn_egg_strider" },
        scripts: {
            preAnimation: [
                `variable.animation_speed = Math.min(${MoLang.modifiedMoveSpeed()}, 0.25);`,
                `${MoLang.variable("speed")} = 85.9437;`,
                `variable.bristle_flow=Math.cos(${MoLang.modifiedDistanceMoved()} * variable.speed + 180) * variable.animation_speed;`,
                `${MoLang.variable("bristle_range_mod")} = 1;`,
                `${MoLang.variable("bristle_speed_mod")} = 1;`
            ],
            animate: [
                "look_at_target",
                { walk: `!${MoLang.isBaby()}` },
                { walk_baby: MoLang.isBaby() },
                { bristle_flow: `!${MoLang.isBaby()}` },
                { bristle_flow_baby: MoLang.isBaby() }
            ],
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`
        },
        animations: {
            look_at_target: "animation.strider.look_at_target.default",
            walk: "animation.strider.walk",
            bristle_flow: "animation.strider.bristle_flow",
            walk_baby: "animation.strider.baby.walk",
            bristle_flow_baby: "animation.strider.baby.bristle_flow"
        },
        renderControllers: ["controller.render.strider.v2"]
    }
});
