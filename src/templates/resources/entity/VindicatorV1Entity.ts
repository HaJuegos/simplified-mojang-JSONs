import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const VindicatorV1Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:vindicator",
    params: {
        materials: { default: "vindicator" },
        textures: { default: "textures/entity/vindicator" },
        geometry: { default: "geometry.vindicator" },
        scripts: {
            scale: "0.9375",
            animate: ["controller_look_at_target", "controller_vindicator_base"]
        },
        animations: {
            look_at_target_default: "animation.humanoid.look_at_target.default.v1.0",
            look_at_target_gliding: "animation.humanoid.look_at_target.gliding.v1.0",
            look_at_target_swimming: "animation.humanoid.look_at_target.swimming.v1.0",
            vindicator_base: "animation.vindicator.base",
            vindicator_attack: "animation.vindicator.attack",
            vindicator_walk: "animation.vindicator.walk",
            controller_look_at_target: "controller.animation.humanoid.look_at_target",
            controller_vindicator_base: "controller.animation.vindicator.base.v1.0"
        },
        renderControllers: ["controller.render.vindicator"],
        enableAttachables: true,
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 39
        },
        hideArmor: true
    }
});
