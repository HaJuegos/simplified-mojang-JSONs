import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const SulfurCubeEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.MostRecent,
    idEntity: "minecraft:sulfur_cube",
    params: {
        materials: {
            default: "sulfur_cube",
            outer: "sulfur_cube_outer"
        },
        textures: {
            default: "textures/entity/sulfur_cube/sulfur_cube_inner",
            small: "textures/entity/sulfur_cube/sulfur_cube_inner_small",
            tnt: "textures/entity/sulfur_cube/sulfur_cube_tnt",
            outer: "textures/entity/sulfur_cube/sulfur_cube_outer",
            outer_small: "textures/entity/sulfur_cube/sulfur_cube_outer_small"
        },
        geometry: {
            default: "geometry.sulfur_cube",
            small: "geometry.sulfur_cube.small"
        },
        scripts: {
            preAnimation: [
                `${MoLang.variable("squish_factor")} = (${MoLang.previousSquishValue()} + (${MoLang.currentSquishValue()} - ${MoLang.previousSquishValue()}) * ${MoLang.frameAlpha()});`,
                `${MoLang.variable("bounce")} = 1 / ((${MoLang.variable("squish_factor")} / (${MoLang.variant()} * 0.5 + 1)) + 1);`,
                `${MoLang.variable("horizontal_scale_amount")} = ${MoLang.variable("bounce")};`,
                `${MoLang.variable("vertical_scale_amount")} = 1 / ${MoLang.variable("bounce")};`,
                `${MoLang.variable("has_absorbed_block")} = ${MoLang.property("minecraft:sulfur_cube_archetype")} != 'none';`,
                `${MoLang.variable("has_absorbed_tnt")} = ${MoLang.isItemNameAny("slot.weapon.mainhand", "minecraft:tnt")};`,
                `${MoLang.variable("is_primed")} = ${MoLang.fuseTime()} >= 0;`,
                `${MoLang.variable("fuse_time")} = ${MoLang.fuseTime()} - ${MoLang.frameAlpha()} + 1;`,
                `${MoLang.variable("swelling_scale")} = ${MoLang.variable("is_primed")} ? (1 + ${MoLang.pow(MoLang.max(0, MoLang.min(`1 - (${MoLang.variable("fuse_time")} / 10)`, 1)), 4)} * 0.3) : 1;`,
                `${MoLang.variable("is_flashing")} = ${MoLang.variable("is_primed")} && math.mod(${MoLang.floor(`${MoLang.fuseTime()} / 5`)}, 2) == 0;`,
                `${MoLang.variable("y_offset")} = ${MoLang.isInvisible()} ? -1.05 : 0.0;`
            ],
            animate: ["sulfur_cube_offset_controller", "sulfur_cube_swelling_controller"],
            scaleX: MoLang.variable("horizontal_scale_amount"),
            scaleY: MoLang.variable("vertical_scale_amount"),
            scaleZ: MoLang.variable("horizontal_scale_amount"),
            hideHeldItems: MoLang.variable("has_absorbed_tnt")
        },
        renderControllers: ["controller.render.sulfur_cube", "controller.render.sulfur_cube_outer"],
        animations: {
            sulfur_cube_offset: "animation.sulfur_cube.offset",
            sulfur_cube_offset_controller: "controller.animation.sulfur_cube.offset",
            sulfur_cube_swelling: "animation.sulfur_cube.swelling",
            sulfur_cube_swelling_controller: "controller.animation.sulfur_cube.swelling"
        },
        spawnEgg: { texture: "spawn_egg_sulfur_cube" },
        heldItemScale: 2.678
    }
});
