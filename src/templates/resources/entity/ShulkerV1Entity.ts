import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const ShulkerV1Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:shulker",
    params: {
        materials: { default: "shulker" },
        textures: {
            undyed: "textures/entity/shulker/shulker_undyed",
            white: "textures/entity/shulker/shulker_white",
            orange: "textures/entity/shulker/shulker_orange",
            magenta: "textures/entity/shulker/shulker_magenta",
            light_blue: "textures/entity/shulker/shulker_light_blue",
            yellow: "textures/entity/shulker/shulker_yellow",
            lime: "textures/entity/shulker/shulker_lime",
            pink: "textures/entity/shulker/shulker_pink",
            gray: "textures/entity/shulker/shulker_gray",
            silver: "textures/entity/shulker/shulker_silver",
            cyan: "textures/entity/shulker/shulker_cyan",
            purple: "textures/entity/shulker/shulker_purple",
            blue: "textures/entity/shulker/shulker_blue",
            brown: "textures/entity/shulker/shulker_brown",
            green: "textures/entity/shulker/shulker_green",
            red: "textures/entity/shulker/shulker_red",
            black: "textures/entity/shulker/shulker_black"
        },
        geometry: { default: "geometry.shulker" },
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 34
        },
        scripts: {
            preAnimation: [
                `${MoLang.variable("Shulker.LidPositionFactor")} = 180 * (0.5 + ${MoLang.variable("Shulker.PeekAmount")});`,
                "variable.Shulker.LidRotationFactor = -1 + Math.sin(180 * (0.5 + variable.Shulker.PeekAmount));",
                `${MoLang.variable("Shulker.UpFacing")} = ${MoLang.variable("Shulker.FacingDirection")} == 1;`,
                `${MoLang.variable("Shulker.NorthFacing")} = ${MoLang.variable("Shulker.FacingDirection")} == 2;`,
                `${MoLang.variable("Shulker.SouthFacing")} = ${MoLang.variable("Shulker.FacingDirection")} == 3;`,
                `${MoLang.variable("Shulker.WestFacing")} = ${MoLang.variable("Shulker.FacingDirection")} == 4;`,
                `${MoLang.variable("Shulker.EastFacing")} = ${MoLang.variable("Shulker.FacingDirection")} == 5;`,
                `${MoLang.variable("Shulker.XPreRotation")} = ${MoLang.variable("Shulker.UpFacing")} * 180 + ${MoLang.variable("Shulker.NorthFacing")} * 90 - ${MoLang.variable("Shulker.SouthFacing")} * 90;`,
                `${MoLang.variable("Shulker.ZPreRotation")} = ${MoLang.variable("Shulker.NorthFacing")} * 180 + ${MoLang.variable("Shulker.WestFacing")} * 90 - ${MoLang.variable("Shulker.EastFacing")} * 90;`,
                `${MoLang.variable("Shulker.XOffset")} = -${MoLang.variable("Shulker.WestFacing")} * 7.99 + ${MoLang.variable("Shulker.EastFacing")} * 7.99;`,
                `${MoLang.variable("Shulker.YOffset")} = ${MoLang.variable("Shulker.UpFacing")} * 16 + ${MoLang.variable("Shulker.NorthFacing")} * 7.99 + ${MoLang.variable("Shulker.SouthFacing")} * 7.99 + ${MoLang.variable("Shulker.WestFacing")} * 7.99 + ${MoLang.variable("Shulker.EastFacing")} * 7.99;`,
                `${MoLang.variable("Shulker.ZOffset")} = ${MoLang.variable("Shulker.NorthFacing")} * 7.99 - ${MoLang.variable("Shulker.SouthFacing")} * 7.99;`
            ],
            animate: ["controller_facing", "controller_move"]
        },
        animations: {
            facing: "animation.shulker.facing.v1.0",
            move: "animation.shulker.move.v1.0",
            look_at_target: "animation.common.look_at_target",
            controller_facing: "controller.animation.shulker.facing",
            controller_move: "controller.animation.shulker.move"
        },
        renderControllers: ["controller.render.shulker"]
    }
});
