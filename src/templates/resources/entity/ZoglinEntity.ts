import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const ZoglinEntity = createRPEntityClient({
    idEntity: "minecraft:zoglin",
    params: {
        materials: { default: "zoglin" },
        textures: {
            default: "textures/entity/zoglin/zoglin",
            baby: "textures/entity/zoglin/zoglin_baby"
        },
        geometry: {
            default: "geometry.hoglin",
            baby: "geometry.hoglin.baby"
        },
        spawnEgg: { texture: "spawn_egg_zoglin" },
        scripts: {
            preAnimation: [
                `variable.tcos_right_side = (Math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * ${MoLang.modifiedMoveSpeed()} / variable.gliding_speed_value) * 57.3;`,
                `${MoLang.variable("tcos_left_side")} = -${MoLang.variable("tcos_right_side")};`,
                "variable.attack_head_rot =  Math.sin(variable.attack_time * 180.0) * -37.3;"
            ],
            animate: [
                "walk",
                "look_at_target",
                { attack: `${MoLang.variable("has_target")} && ${MoLang.variable("attack_time")} >= 0.0` }
            ],
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`
        },
        animations: {
            walk: "animation.hoglin.walk",
            look_at_target: "animation.hoglin.look_at_target",
            attack: "animation.hoglin.attack",
            hoglin_baby_scaling: "animation.hoglin.baby_scaling"
        },
        renderControllers: ["controller.render.zoglin.v2"]
    }
});
