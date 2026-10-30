import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const CaveSpiderV1Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:cave_spider",
    params: {
        materials: {
            default: "spider",
            invisible: "spider_invisible"
        },
        textures: { default: "textures/entity/spider/cave_spider" },
        geometry: { default: "geometry.spider" },
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
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 22
        }
    }
});
