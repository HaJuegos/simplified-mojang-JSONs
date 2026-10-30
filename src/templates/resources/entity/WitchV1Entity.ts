import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const WitchV1Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:witch",
    params: {
        materials: { default: "witch" },
        textures: { default: "textures/entity/witch" },
        geometry: { default: "geometry.villager.witch" },
        scripts: {
            scale: "0.9375",
            animate: ["controller_general", "controller_move"]
        },
        animations: {
            villager_general: "animation.villager.general.v1.0",
            look_at_target: "animation.common.look_at_target",
            move: "animation.villager.move",
            general: "animation.witch.general",
            controller_general: "controller.animation.witch.general",
            controller_move: "controller.animation.villager.move"
        },
        renderControllers: ["controller.render.witch.v1.0"],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 17
        }
    }
});
