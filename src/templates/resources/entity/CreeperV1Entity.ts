import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const CreeperV1Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:creeper",
    params: {
        materials: {
            default: "creeper",
            charged: "charged_creeper"
        },
        textures: {
            default: "textures/entity/creeper/creeper",
            charged: "textures/entity/creeper/creeper_armor"
        },
        geometry: {
            default: "geometry.creeper",
            charged: "geometry.creeper.charged"
        },
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 6
        },
        scripts: {
            preAnimation: [
                `variable.wobble = Math.sin(${MoLang.swellAmount()} * 5730) * ${MoLang.swellAmount()} * 0.01 + 1.0;`,
                `variable.swelling_scale1 = (Math.pow(Math.clamp(${MoLang.swellAmount()}, 0.0, 1.0), 4.0) * 0.4 + 1.0) * variable.wobble;`,
                `variable.swelling_scale2 = (Math.pow(Math.clamp(${MoLang.swellAmount()}, 0.0, 1.0), 4.0) * 0.1 + 1.0) / variable.wobble;`,
                `variable.leg_rot = Math.cos(${MoLang.modifiedDistanceMoved()} * 38.17326) * 80.22 * ${MoLang.modifiedMoveSpeed()};`,
                `variable.flash = Math.mod(Math.Round(${MoLang.swellAmount()} * 10.0), 2.0);`
            ],
            animate: ["controller_creeper_head", "controller_creeper_legs", "controller_creeper_swelling"]
        },
        animations: {
            creeper_head: "animation.common.look_at_target",
            creeper_legs: "animation.creeper.legs",
            creeper_swelling: "animation.creeper.swelling",
            controller_creeper_head: "controller.animation.creeper.head",
            controller_creeper_legs: "controller.animation.creeper.legs",
            controller_creeper_swelling: "controller.animation.creeper.swelling"
        },
        renderControllers: ["controller.render.creeper", "controller.render.creeper_armor"]
    }
});
