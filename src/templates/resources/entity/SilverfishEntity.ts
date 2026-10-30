import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const SilverfishEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:silverfish",
    params: {
        materials: {
            default: "silverfish",
            body_layer: "silverfish_layers"
        },
        textures: { default: "textures/entity/silverfish" },
        geometry: { default: "geometry.silverfish" },
        animations: {
            move: "animation.silverfish.move",
            controller_move: "controller.animation.silverfish.move"
        },
        renderControllers: ["controller.render.silverfish"],
        spawnEgg: { texture: "spawn_egg_silverfish" },
        scripts: {
            animate: ["controller_move"]
        }
    }
});
