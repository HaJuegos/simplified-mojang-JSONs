import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const WitherV1Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:wither",
    params: {
        materials: {
            default: "wither_boss",
            armor: "wither_boss_armor"
        },
        textures: {
            default: "textures/entity/wither_boss/wither",
            armor_white: "textures/entity/wither_boss/wither_armor_white",
            armor_blue: "textures/entity/wither_boss/wither_armor_blue",
            invulnerable: "textures/entity/wither_boss/wither_invulnerable"
        },
        geometry: {
            default: "geometry.witherBoss",
            armor: "geometry.witherBoss.armor"
        },
        scripts: {
            preAnimation: [
                `${MoLang.variable("base_scale")} = 2;`,
                `variable.swell_clamped = Math.clamp(${MoLang.swellAmount()}, 0.0, 1.0);`,
                `variable.wobble = 1.0 + Math.sin(${MoLang.swellAmount()} * 5730) * ${MoLang.swellAmount()} * 0.01;`,
                "variable.swell_adjustment = Math.pow(variable.swell_clamped, 4);",
                `${MoLang.variable("scale_xz")} = (1.0 + ${MoLang.variable("swell_adjustment")} * 0.4) * ${MoLang.variable("wobble")};`,
                `${MoLang.variable("scale_y")} = (1.0 + ${MoLang.variable("swell_adjustment")} * 0.1) / ${MoLang.variable("wobble")};`,
                `variable.body_base_rotation = Math.cos(${MoLang.lifeTime()} * 114.6);`,
                `${MoLang.variable("upper_body_rotation")} = (0.065 + 0.05 * ${MoLang.variable("body_base_rotation")}) * 180 + ${MoLang.targetXRotation()};`,
                `${MoLang.variable("is_invulnerable")} = ${MoLang.invulnerableTicks()} > 0.0;`,
                `variable.display_normal_skin = (${MoLang.invulnerableTicks()} <= 0) || ((${MoLang.invulnerableTicks()} <= 80) && (Math.mod(${MoLang.invulnerableTicks()} / 5, 2) == 1));`
            ],
            scaleX: `${MoLang.variable("scale_xz")} * ${MoLang.variable("base_scale")}`,
            scaleY: `${MoLang.variable("scale_y")} * ${MoLang.variable("base_scale")}`,
            scaleZ: `${MoLang.variable("scale_xz")} * ${MoLang.variable("base_scale")}`,
            animate: ["controller_move"]
        },
        animations: {
            scale: "animation.wither_boss.scale",
            move: "animation.wither_boss.move",
            look_at_target: "animation.wither_boss.look_at_target",
            controller_move: "controller.animation.wither_boss.move"
        },
        renderControllers: [
            "controller.render.wither_boss",
            "controller.render.wither_boss_armor_white",
            "controller.render.wither_boss_armor_blue"
        ],
        spawnEgg: {
            baseColor: "#141414",
            overlayColor: "#4d72a0"
        }
    }
});
