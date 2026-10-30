import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const SheepV1Entity = createRPEntityClient({
    idEntity: "minecraft:sheep",
    params: {
        materials: { default: "sheep" },
        textures: { default: "textures/entity/sheep/sheep" },
        geometry: {
            default: "geometry.sheep",
            sheared: "geometry.sheep.sheared"
        },
        particleEmitters: { flame: "animation.blaze.flame" },
        animations: {
            setup: "animation.sheep.setup",
            grazing: "animation.sheep.grazing",
            walk: "animation.quadruped.walk",
            look_at_target: "animation.common.look_at_target",
            baby_transform: "animation.sheep.baby_transform",
            move: "controller.animation.sheep.move"
        },
        scripts: {
            animate: [
                "setup",
                "look_at_target",
                "move",
                { baby_transform: MoLang.isBaby() }
            ]
        },
        renderControllers: ["controller.render.sheep"],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 3
        }
    }
});
