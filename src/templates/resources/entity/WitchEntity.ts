import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const WitchEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:witch",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: { default: "witch" },
        textures: { default: "textures/entity/witch" },
        geometry: { default: "geometry.villager.witch.v1.8" },
        scripts: {
            scale: "0.9375",
            animate: ["controller_general", "controller_move"]
        },
        animations: {
            villager_general: "animation.villager.general",
            look_at_target: "animation.common.look_at_target",
            move: "animation.villager.move",
            general: "animation.witch.general",
            controller_general: "controller.animation.witch.general",
            controller_move: "controller.animation.villager.move"
        },
        renderControllers: ["controller.render.witch"],
        spawnEgg: { texture: "spawn_egg_witch" }
    }
});
