import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const CaveSpiderEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:cave_spider",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: {
            default: "spider",
            invisible: "spider_invisible"
        },
        textures: { default: "textures/entity/spider/cave_spider" },
        geometry: { default: "geometry.spider.v1.8" },
        scripts: {
            scale: "0.7",
            animate: ["controller_move"]
        },
        animations: {
            default_leg_pose: "animation.spider.default_leg_pose",
            look_at_target: "animation.spider.look_at_target",
            walk: "animation.spider.walk",
            controller_move: "controller.animation.spider.move"
        },
        renderControllers: ["controller.render.spider"],
        spawnEgg: { texture: "spawn_egg_cave_spider" }
    }
});
