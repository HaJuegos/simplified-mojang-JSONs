import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const CowEntity = createRPEntityClient({
    idEntity: "minecraft:cow",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: {
            default: "cow",
            cold: "cow_cold"
        },
        textures: {
            default: "textures/entity/cow/cow_v2",
            warm: "textures/entity/cow/cow_warm",
            cold: "textures/entity/cow/cow_cold",
            baby_default: "textures/entity/cow/cow_temperate_baby",
            baby_cold: "textures/entity/cow/cow_cold_baby",
            baby_warm: "textures/entity/cow/cow_warm_baby"
        },
        geometry: {
            default: "geometry.cow.v2",
            warm: "geometry.cow.warm",
            cold: "geometry.cow.cold",
            baby: "geometry.cow.baby"
        },
        animations: {
            setup: "animation.cow.setup",
            walk: "animation.quadruped.walk",
            look_at_target: "animation.common.look_at_target",
            baby_transform: "animation.cow.baby_transform"
        },
        scripts: {
            animate: [
                "setup",
                { walk: MoLang.modifiedMoveSpeed() },
                "look_at_target"
            ],
            preAnimation: [
                `${MoLang.temp("variant")} = ${MoLang.property("minecraft:climate_variant")};`,
                `${MoLang.variable("index")} = (${MoLang.temp("variant")} == 'temperate') ? 0 : ((${MoLang.temp("variant")} == 'warm') ? 1 : 2);`,
                `${MoLang.variable("is_cold")} = ${MoLang.temp("variant")} == 'cold';`
            ],
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`
        },
        renderControllers: ["controller.render.cow.v3"],
        spawnEgg: { texture: "spawn_egg_cow" }
    }
});
