import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const ChickenEntity = createRPEntityClient({
    idEntity: "minecraft:chicken",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_12_0,
        materials: {
            default: "chicken",
            legs: "chicken_legs",
            cold: "chicken_cold"
        },
        textures: {
            default: "textures/entity/chicken/chicken",
            warm: "textures/entity/chicken/chicken_warm",
            cold: "textures/entity/chicken/chicken_cold",
            baby_default: "textures/entity/chicken/chicken_temperate_baby",
            baby_warm: "textures/entity/chicken/chicken_warm_baby",
            baby_cold: "textures/entity/chicken/chicken_cold_baby"
        },
        geometry: {
            default: "geometry.chicken.v1.12",
            warm: "geometry.chicken.v1.12",
            cold: "geometry.chicken.cold",
            baby: "geometry.chicken.baby"
        },
        animations: {
            move: "animation.chicken.move",
            general: "animation.chicken.general",
            look_at_target: "animation.common.look_at_target",
            baby_transform: "animation.chicken.baby_transform"
        },
        scripts: {
            animate: [
                "general",
                { move: MoLang.modifiedMoveSpeed() },
                "look_at_target"
            ],
            preAnimation: [
                `${MoLang.temp("variant")} = ${MoLang.property("minecraft:climate_variant")};`,
                `${MoLang.variable("index")} = (${MoLang.temp("variant")} == 'temperate') ? 0 : ((${MoLang.temp("variant")} == 'warm') ? 1 : 2);`,
                `${MoLang.variable("is_cold")} = ${MoLang.temp("variant")} == 'cold';`
            ],
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`
        },
        renderControllers: ["controller.render.chicken.v3"],
        spawnEgg: { texture: "spawn_egg_chicken" }
    }
});
