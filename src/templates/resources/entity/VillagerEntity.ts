import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const VillagerEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:villager",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: { default: "villager" },
        textures: {
            farmer: "textures/entity/villager/farmer",
            librarian: "textures/entity/villager/librarian",
            priest: "textures/entity/villager/priest",
            smith: "textures/entity/villager/smith",
            butcher: "textures/entity/villager/butcher"
        },
        geometry: { default: "geometry.villager.v1.8" },
        scripts: {
            scale: "0.9375",
            animate: ["controller_general", "controller_move", "controller_baby"]
        },
        animations: {
            general: "animation.villager.general",
            look_at_target: "animation.common.look_at_target",
            move: "animation.villager.move",
            baby_transform: "animation.villager.baby_transform",
            controller_general: "controller.animation.villager.general",
            controller_move: "controller.animation.villager.move",
            controller_baby: "controller.animation.villager.baby"
        },
        renderControllers: ["controller.render.villager"],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 14
        }
    }
});
