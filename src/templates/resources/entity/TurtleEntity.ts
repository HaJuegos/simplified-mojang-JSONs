import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const TurtleEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:turtle",
    params: {
        materials: { default: "turtle" },
        textures: {
            default: "textures/entity/sea_turtle",
            baby: "textures/entity/turtle/sea_turtle_baby"
        },
        geometry: {
            default: "geometry.turtle",
            baby: "geometry.turtle.baby"
        },
        scripts: {
            preAnimation: [
                `${MoLang.variable("timeMultiplier")} = ${MoLang.hasRider()} ? 0.39972 : 1.0;`,
                `${MoLang.variable("backLegMultiplier")} = ${MoLang.hasRider()} ? 0.5 : 3.0;`,
                `${MoLang.variable("frontLegMultiplier")} = ${MoLang.hasRider()} ? 2.0 : 8.0;`,
                `${MoLang.variable("legSpeedMultiplier")} = ${MoLang.hasRider()} ? 2.0 : 5.0;`
            ],
            scale: `${MoLang.isBaby()} ? (1 / 0.16) : 1.0`,
            animate: ["controller_general", "controller_move"]
        },
        animations: {
            general: "animation.turtle.general",
            move: "animation.turtle.move",
            ground_move: "animation.turtle.ground_move",
            look_at_target: "animation.common.look_at_target",
            move_baby: "animation.turtle.baby_move",
            controller_general: "controller.animation.turtle.general",
            controller_move: "controller.animation.turtle.move"
        },
        renderControllers: ["controller.render.turtle.v2"],
        spawnEgg: { texture: "spawn_egg_turtle" }
    }
});
