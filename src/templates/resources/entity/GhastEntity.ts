import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const GhastEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:ghast",
    params: {
        materials: { default: "ghast" },
        textures: {
            default: "textures/entity/ghast/ghast",
            shooting: "textures/entity/ghast/ghast_shooting"
        },
        geometry: { default: "geometry.ghast" },
        spawnEgg: { texture: "spawn_egg_ghast" },
        animations: {
            move: "animation.ghast.move",
            scale: "animation.ghast.scale",
            controller_move: "controller.animation.ghast.move"
        },
        renderControllers: ["controller.render.ghast"],
        scripts: {
            animate: ["controller_move"]
        }
    }
});
