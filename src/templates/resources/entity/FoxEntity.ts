import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const FoxEntity = createRPEntityClient({
    idEntity: "minecraft:fox",
    params: {
        materials: { default: "fox" },
        textures: {
            red: "textures/entity/fox/fox",
            arctic: "textures/entity/fox/arctic_fox",
            baby_red: "textures/entity/fox/fox_baby",
            baby_arctic: "textures/entity/fox/fox_snow_baby",
            baby_sleep_red: "textures/entity/fox/fox_sleep_baby",
            baby_sleep_arctic: "textures/entity/fox/fox_snow_sleep_baby"
        },
        geometry: {
            default: "geometry.fox",
            baby: "geometry.fox.baby"
        },
        animations: {
            walk: "animation.quadruped.walk",
            look_at_target: "animation.common.look_at_target",
            baby_transform: "animation.fox.baby_transform",
            crouch: "animation.fox.crouch",
            sleep: "animation.fox.sleep",
            setup: "animation.fox.setup",
            sit: "animation.fox.sit",
            wiggle: "animation.fox.wiggle",
            stuck: "animation.fox.stuck",
            pounce: "animation.fox.pounce",
            move: "controller.animation.fox.move",
            baby_walk: "animation.fox.baby_walk",
            baby_pounce: "animation.fox.baby_pounce",
            baby_sit: "animation.fox.baby_sit",
            baby_sleep: "animation.fox.baby_sleep",
            baby_wiggle: "animation.fox.baby_wiggle"
        },
        scripts: {
            animate: ["setup", "move"],
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`
        },
        renderControllers: ["controller.render.fox.v2"],
        spawnEgg: { texture: "spawn_egg_fox" }
    }
});
