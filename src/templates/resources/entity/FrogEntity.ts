import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const FrogEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:frog",
    params: {
        materials: { default: "frog" },
        textures: {
            temperate: "textures/entity/frog/temperate_frog",
            cold: "textures/entity/frog/cold_frog",
            warm: "textures/entity/frog/warm_frog"
        },
        geometry: { default: "geometry.frog" },
        spawnEgg: { texture: "spawn_egg_frog" },
        scripts: {
            preAnimation: [`${MoLang.variable("moving")} = ${MoLang.groundSpeed()} > 0 || ${MoLang.verticalSpeed()} > 0;`],
            animate: ["controller_general", "controller_croaking", "controller_eat_mob"]
        },
        animations: {
            croak: "animation.frog.croak",
            jump: "animation.frog.jump",
            tongue: "animation.frog.tongue",
            walk: "animation.frog.walk",
            swim: "animation.frog.swim",
            idle_water: "animation.frog.idle.water",
            look_at_target: "animation.common.look_at_target",
            controller_general: "controller.animation.frog.general",
            controller_croaking: "controller.animation.frog.croaking",
            controller_eat_mob: "controller.animation.frog.eat_mob"
        },
        renderControllers: ["controller.render.frog"]
    }
});
