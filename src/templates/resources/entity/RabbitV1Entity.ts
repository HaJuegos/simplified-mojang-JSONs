import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const RabbitV1Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:rabbit",
    params: {
        materials: { default: "rabbit" },
        textures: {
            brown: "textures/entity/rabbit/brown",
            white: "textures/entity/rabbit/white",
            black: "textures/entity/rabbit/blackrabbit",
            white_splotched: "textures/entity/rabbit/white_splotched",
            gold: "textures/entity/rabbit/gold",
            salt: "textures/entity/rabbit/salt",
            toast: "textures/entity/rabbit/toast"
        },
        geometry: { default: "geometry.rabbit" },
        animations: {
            move: "animation.rabbit.move",
            baby_transform: "animation.rabbit.baby_transform",
            look_at_target: "animation.common.look_at_target",
            controller_general: "controller.animation.rabbit.general",
            controller_baby: "controller.animation.rabbit.baby"
        },
        renderControllers: ["controller.render.rabbit"],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 24
        },
        scripts: {
            animate: ["controller_general", "controller_baby"]
        }
    }
});
