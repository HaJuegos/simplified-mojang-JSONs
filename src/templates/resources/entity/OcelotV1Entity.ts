import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const OcelotV1Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:ocelot",
    params: {
        materials: { default: "ocelot" },
        textures: {
            black: "textures/entity/cat/blackcat",
            red: "textures/entity/cat/red",
            siamese: "textures/entity/cat/siamese",
            wild: "textures/entity/cat/ocelot"
        },
        geometry: { default: "geometry.ocelot" },
        animations: {
            baby_transform: "animation.ocelot_v1.0.baby_transform",
            look_at_target: "animation.common.look_at_target",
            setup: "animation.ocelot_v1.0.setup",
            sit: "animation.ocelot_v1.0.sit",
            sneak: "animation.ocelot_v1.0.sneak",
            sprint: "animation.ocelot_v1.0.sprint",
            walk: "animation.ocelot_v1.0.walk",
            controller_setup: "controller.animation.ocelot_v1.0.setup",
            controller_move: "controller.animation.ocelot_v1.0.move",
            controller_baby: "controller.animation.ocelot_v1.0.baby",
            controller_look_at_target: "controller.animation.ocelot_v1.0.look_at_target"
        },
        renderControllers: ["controller.render.ocelot"],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 16
        },
        scripts: {
            animate: ["controller_setup", "controller_move", "controller_baby", "controller_look_at_target"]
        }
    }
});
