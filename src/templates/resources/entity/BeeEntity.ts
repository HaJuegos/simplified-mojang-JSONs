import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const BeeEntity = createRPEntityClient({
    idEntity: "minecraft:bee",
    params: {
        materials: { default: "bee" },
        textures: {
            default: "textures/entity/bee/bee",
            angry: "textures/entity/bee/bee_angry",
            nectar: "textures/entity/bee/bee_nectar",
            angry_nectar: "textures/entity/bee/bee_angry_nectar",
            baby_default: "textures/entity/bee/bee_baby",
            baby_angry: "textures/entity/bee/bee_angry_baby",
            baby_nectar: "textures/entity/bee/bee_nectar_baby",
            baby_angry_nectar: "textures/entity/bee/bee_angry_nectar_baby"
        },
        geometry: {
            default: "geometry.bee",
            baby: "geometry.bee.baby"
        },
        animations: {
            flying: "animation.bee.flying",
            drip: "controller.animation.bee.drip",
            controller_bee_sting: "controller.animation.bee.sting",
            bee_sting: "animation.bee.sting",
            bee_no_stinger: "animation.bee.no_stinger",
            bee_fly_bobbing: "animation.bee.fly.bobbing",
            bee_root_controller: "controller.animation.bee.root"
        },
        particleEffects: { nectar_dripping: "minecraft:nectar_drip_particle" },
        scripts: {
            animate: [
                "bee_root_controller",
                { bee_no_stinger: `${MoLang.markVariant()} == 1` }
            ],
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`
        },
        renderControllers: ["controller.render.bee.v2"],
        spawnEgg: { texture: "spawn_egg_bee" }
    }
});
