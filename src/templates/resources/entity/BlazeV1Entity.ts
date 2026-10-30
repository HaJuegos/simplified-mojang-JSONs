import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const BlazeV1Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:blaze",
    params: {
        materials: {
            body: "blaze_head",
            head: "blaze_body"
        },
        textures: { default: "textures/entity/blaze" },
        geometry: { default: "geometry.blaze" },
        animations: {
            look_at_target: "animation.common.look_at_target",
            move: "animation.blaze.move",
            controller_move: "controller.animation.blaze.move",
            controller_flame: "controller.animation.blaze.flame"
        },
        particleEffects: { charged_flames: "minecraft:mobflame_emitter" },
        renderControllers: ["controller.render.blaze"],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 21
        },
        scripts: {
            animate: ["controller_move", "controller_flame"]
        }
    }
});
