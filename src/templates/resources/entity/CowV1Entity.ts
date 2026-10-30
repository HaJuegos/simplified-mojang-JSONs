import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const CowV1Entity = createRPEntityClient({
    idEntity: "minecraft:cow",
    params: {
        materials: { default: "cow" },
        textures: { default: "textures/entity/cow/cow" },
        geometry: { default: "geometry.cow" },
        animations: {
            setup: "animation.cow.setup.v1.0",
            walk: "animation.quadruped.walk",
            look_at_target: "animation.common.look_at_target",
            baby_transform: "animation.cow.baby_transform"
        },
        scripts: {
            animate: [
                "setup",
                { walk: MoLang.modifiedMoveSpeed() },
                "look_at_target",
                { baby_transform: MoLang.isBaby() }
            ]
        },
        renderControllers: ["controller.render.cow"],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 1
        }
    }
});
