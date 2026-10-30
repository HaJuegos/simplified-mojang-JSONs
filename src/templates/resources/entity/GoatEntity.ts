import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const GoatEntity = createRPEntityClient({
    idEntity: "minecraft:goat",
    params: {
        materials: { default: "goat" },
        textures: {
            default: "textures/entity/goat/goat",
            baby: "textures/entity/goat/goat_baby"
        },
        geometry: {
            default: "geometry.goat",
            baby: "geometry.goat.baby"
        },
        spawnEgg: { texture: "spawn_egg_goat" },
        scripts: {
            preAnimation: [
                `variable.tcos_right_side = (Math.cos(${MoLang.modifiedDistanceMoved()} * 38.17) * ${MoLang.modifiedMoveSpeed()} / variable.gliding_speed_value) * 57.3;`,
                `${MoLang.variable("tcos_left_side")} = -${MoLang.variable("tcos_right_side")};`,
                "variable.attack_head_rot =  Math.sin(variable.attack_time * 180.0) * -37.3;",
                "variable.ram_head_rot = Math.sin(variable.should_bow_head * 90.0) * 37.3;"
            ],
            animate: [
                "walk",
                "look_at_target",
                { attack: `${MoLang.variable("has_target")} && ${MoLang.variable("attack_time")} >= 0.0` },
                "ram_attack"
            ],
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`
        },
        animations: {
            walk: "animation.goat.walk",
            look_at_target: "animation.goat.look_at_target",
            attack: "animation.goat.attack",
            ram_attack: "animation.goat.ram_attack"
        },
        renderControllers: ["controller.render.goat.v2"]
    }
});
