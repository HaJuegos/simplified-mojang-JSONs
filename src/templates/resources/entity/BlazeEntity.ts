import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const BlazeEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:blaze",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: {
            body: "blaze_body",
            head: "blaze_head"
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
        spawnEgg: { texture: "spawn_egg_blaze" },
        scripts: {
            animate: ["controller_move", "controller_flame"]
        }
    }
});
