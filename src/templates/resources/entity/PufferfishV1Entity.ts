import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const PufferfishV1Entity = createRPEntityClient({
    idEntity: "minecraft:pufferfish",
    params: {
        materials: { default: "pufferfish" },
        textures: { default: "textures/entity/fish/pufferfish" },
        geometry: {
            default: "geometry.pufferfish.small",
            mid: "geometry.pufferfish.mid",
            large: "geometry.pufferfish.large"
        },
        scripts: {
            preAnimation: [
                `variable.ZRot = !${MoLang.isInWater()} ? Math.cos(${MoLang.timeStamp()} * 14.32) * 90 : 0.0;`,
                `variable.AnimationAmountBlend = Math.lerp(variable.AnimationAmountPrev, variable.AnimationAmount, ${MoLang.frameAlpha()});`
            ],
            animate: ["general"]
        },
        animations: {
            flop: "animation.pufferfish.flop",
            swim: "animation.pufferfish.swim",
            general: "controller.animation.fish.general"
        },
        renderControllers: [
            { "controller.render.pufferfish.small": `${MoLang.variant()} == 0` },
            { "controller.render.pufferfish.medium": `${MoLang.variant()} == 1` },
            { "controller.render.pufferfish.large": `${MoLang.variant()} == 2` }
        ],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 46
        }
    }
});
