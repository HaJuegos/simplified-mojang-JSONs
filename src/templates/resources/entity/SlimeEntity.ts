import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const SlimeEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:slime",
    params: {
        materials: {
            default: "slime",
            outer: "slime_outer"
        },
        textures: { default: "textures/entity/slime/slime" },
        geometry: {
            default: "geometry.slime",
            armor: "geometry.slime.armor"
        },
        scripts: {
            preAnimation: [
                `${MoLang.variable("squish_factor")} = (${MoLang.previousSquishValue()} + (${MoLang.currentSquishValue()} - ${MoLang.previousSquishValue()}) * ${MoLang.frameAlpha()});`,
                `${MoLang.variable("bounce")} = 1 / ((${MoLang.variable("squish_factor")} / (${MoLang.variant()} * 0.5 + 1)) + 1);`,
                `${MoLang.variable("horizontal_scale_amount")} = ${MoLang.variable("bounce")} * ${MoLang.variant()};`,
                `${MoLang.variable("vertical_scale_amount")} = (1 / ${MoLang.variable("bounce")}) * ${MoLang.variant()};`
            ],
            scaleX: MoLang.variable("horizontal_scale_amount"),
            scaleY: MoLang.variable("vertical_scale_amount"),
            scaleZ: MoLang.variable("horizontal_scale_amount")
        },
        renderControllers: ["controller.render.slime", "controller.render.slime_armor"],
        spawnEgg: { texture: "spawn_egg_slime" }
    }
});
