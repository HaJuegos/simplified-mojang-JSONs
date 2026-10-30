import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const PolarBearEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:polar_bear",
    params: {
        materials: { default: "polar_bear" },
        textures: {
            default: "textures/entity/polar_bear",
            baby: "textures/entity/polar_bear/polar_bear_baby"
        },
        geometry: {
            default: "geometry.polarbear",
            baby: "geometry.polar_bear.baby"
        },
        animations: {
            walk: "animation.quadruped.walk",
            move: "animation.polarbear.move",
            look_at_target: "animation.common.look_at_target",
            baby_transform: "animation.polarbear.baby_transform",
            controller_move: "controller.animation.polar_bear.move"
        },
        scripts: {
            scale: `${MoLang.isBaby()} ? 2.0 : 1.2`,
            animate: ["controller_move"]
        },
        renderControllers: ["controller.render.polar_bear.v2"],
        spawnEgg: { texture: "spawn_egg_polar_bear" }
    }
});
