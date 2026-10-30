import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const EvocationIllagerV1Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:evocation_illager",
    params: {
        materials: { default: "evoker" },
        textures: { default: "textures/entity/illager/evoker" },
        geometry: { default: "geometry.evoker" },
        scripts: {
            scale: "0.9375",
            animate: ["controller_general", "controller_move"]
        },
        animations: {
            general: "animation.evoker.general.v1.0",
            casting: "animation.evoker.casting.v1.0",
            look_at_target: "animation.humanoid.look_at_target.default.v1.0",
            move: "animation.villager.move",
            "riding.legs": "animation.humanoid.riding.legs",
            controller_riding: "controller.animation.humanoid.riding_legs_only",
            controller_general: "controller.animation.evoker.general.v1.0",
            controller_move: "controller.animation.villager.move"
        },
        particleEffects: { spell: "minecraft:evoker_spell" },
        renderControllers: ["controller.render.evoker"],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 40
        }
    }
});
