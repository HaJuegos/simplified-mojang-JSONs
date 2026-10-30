import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const MagmaCubeEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:magma_cube",
    params: {
        materials: { default: "magma_cube" },
        textures: { default: "textures/entity/slime/magmacube_v2" },
        geometry: { default: "geometry.magma_cube_v2" },
        scripts: {
            preAnimation: [
                `${MoLang.variable("slime_squish_factor")} = (${MoLang.previousSquishValue()} + (${MoLang.currentSquishValue()} - ${MoLang.previousSquishValue()}) * ${MoLang.frameAlpha()});`,
                `${MoLang.variable("bounce")} = 1 / ((${MoLang.variable("slime_squish_factor")} / (${MoLang.variant()} * 0.5 + 1)) + 1);`,
                `${MoLang.variable("horizontal_scale_amount")} = ${MoLang.variable("bounce")} * ${MoLang.variant()};`,
                `${MoLang.variable("vertical_scale_amount")} = (1 / ${MoLang.variable("bounce")}) * ${MoLang.variant()};`
            ],
            scaleX: MoLang.variable("horizontal_scale_amount"),
            scaleY: MoLang.variable("vertical_scale_amount"),
            scaleZ: MoLang.variable("horizontal_scale_amount"),
            animate: ["controller_general"]
        },
        animations: {
            move: "animation.magma_cube.move",
            controller_general: "controller.animation.magma_cube.general"
        },
        renderControllers: ["controller.render.magma_cube"],
        spawnEgg: { texture: "spawn_egg_magma_cube" }
    }
});
