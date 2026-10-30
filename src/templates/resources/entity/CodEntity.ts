import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const CodEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:cod",
    params: {
        materials: { default: "cod" },
        textures: { default: "textures/entity/fish/cod" },
        geometry: { default: "geometry.cod" },
        scripts: {
            preAnimation: [
                `variable.ZRot = !${MoLang.isInWater()} ? Math.cos((${MoLang.timeStamp()} + ${MoLang.frameAlpha()}) * 14.32) * 90 : 0.0;`,
                `variable.AnimationAmountBlend = Math.lerp(variable.AnimationAmountPrev, variable.AnimationAmount, ${MoLang.frameAlpha()});`
            ],
            animate: ["controller_general"]
        },
        animations: {
            flop: "animation.cod.flop",
            swim: "animation.cod.swim",
            controller_general: "controller.animation.fish.general"
        },
        renderControllers: ["controller.render.cod"],
        spawnEgg: { texture: "spawn_egg_cod" }
    }
});
