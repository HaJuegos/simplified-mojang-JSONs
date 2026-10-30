import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const SalmonEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:salmon",
    params: {
        materials: { default: "salmon" },
        textures: { default: "textures/entity/fish/salmon" },
        geometry: { default: "geometry.salmon" },
        scripts: {
            preAnimation: [
                `variable.ZRot = !${MoLang.isInWater()} ? Math.cos((${MoLang.timeStamp()} + ${MoLang.frameAlpha()}) * 14.32) * 90 : 0.0;`,
                `variable.AnimationAmountBlend = Math.lerp(variable.AnimationAmountPrev, variable.AnimationAmount, ${MoLang.frameAlpha()});`
            ],
            animate: ["controller_general"]
        },
        animations: {
            flop: "animation.salmon.flop",
            swim: "animation.salmon.swim",
            controller_general: "controller.animation.fish.general"
        },
        renderControllers: ["controller.render.salmon"],
        spawnEgg: { texture: "spawn_egg_salmon" }
    }
});
