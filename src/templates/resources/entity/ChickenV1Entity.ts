import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const ChickenV1Entity = createRPEntityClient({
    idEntity: "minecraft:chicken",
    params: {
        materials: {
            default: "chicken",
            legs: "chicken_legs"
        },
        textures: { default: "textures/entity/chicken" },
        geometry: { default: "geometry.chicken" },
        animations: {
            move: "animation.chicken.move",
            general: "animation.chicken.general.v1.0",
            look_at_target: "animation.common.look_at_target",
            baby_transform: "animation.chicken.baby_transform"
        },
        scripts: {
            animate: [
                "general",
                { move: MoLang.modifiedMoveSpeed() },
                "look_at_target",
                { baby_transform: MoLang.isBaby() }
            ]
        },
        renderControllers: ["controller.render.chicken"],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 0
        }
    }
});
