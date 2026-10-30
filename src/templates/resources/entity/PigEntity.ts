import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const PigEntity = createRPEntityClient({
    idEntity: "minecraft:pig",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: { default: "pig_v3" },
        textures: {
            default: "textures/entity/pig/pig_v3",
            saddled: "textures/entity/pig/pig_saddle",
            warm: "textures/entity/pig/pig_warm",
            cold: "textures/entity/pig/pig_cold",
            saddle: "textures/entity/saddle_v2",
            baby_default: "textures/entity/pig/pig_temperate_baby",
            baby_warm: "textures/entity/pig/pig_warm_baby",
            baby_cold: "textures/entity/pig/pig_cold_baby"
        },
        geometry: {
            default: "geometry.pig.v3",
            baby: "geometry.pig.baby"
        },
        animations: {
            setup: "animation.pig.setup",
            walk: "animation.quadruped.walk",
            look_at_target: "animation.common.look_at_target",
            baby_transform: "animation.pig.baby_transform"
        },
        scripts: {
            animate: [
                "setup",
                { walk: MoLang.modifiedMoveSpeed() },
                "look_at_target"
            ],
            preAnimation: [
                `${MoLang.temp("variant")} = ${MoLang.property("minecraft:climate_variant")};`,
                `${MoLang.variable("index")} = (${MoLang.temp("variant")} == 'temperate') ? 0 : ((${MoLang.temp("variant")} == 'warm') ? 1 : 2);`
            ],
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`
        },
        renderControllers: ["controller.render.saddle", "controller.render.pig.v4"],
        spawnEgg: { texture: "spawn_egg_pig" }
    }
});
