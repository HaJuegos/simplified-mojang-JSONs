import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const MooshroomV1Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:mooshroom",
    params: {
        materials: { default: "mooshroom" },
        textures: {
            default: "textures/entity/cow/mooshroom",
            brown: "textures/entity/cow/brown_mooshroom"
        },
        geometry: { default: "geometry.mooshroom" },
        animations: {
            setup: "animation.mooshroom.setup.v1.0",
            walk: "animation.quadruped.walk",
            look_at_target: "animation.common.look_at_target",
            baby_transform: "animation.mooshroom.baby_transform",
            controller_setup: "controller.animation.mooshroom.setup",
            controller_move: "controller.animation.mooshroom.move",
            controller_baby: "controller.animation.mooshroom.baby"
        },
        renderControllers: ["controller.render.mooshroom"],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 5
        },
        scripts: {
            animate: ["controller_setup", "controller_move", "controller_baby"]
        }
    }
});
