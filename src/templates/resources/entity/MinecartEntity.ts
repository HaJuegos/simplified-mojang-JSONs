import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const MinecartEntity = createRPEntityClient({
    idEntity: "minecraft:minecart",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: { default: "minecart" },
        textures: { default: "textures/entity/minecart" },
        geometry: { default: "geometry.minecart" },
        scripts: {
            preAnimation: [`${MoLang.variable("hurt")} = ${MoLang.hurtTime()} - ${MoLang.frameAlpha()};`],
            animate: ["move"],
            shouldUpdateEffectsOffscreen: "1.0",
            shouldUpdateBonesAndEffectsOffscreen: "1.0"
        },
        animations: { move: "animation.minecart.move.v1.0" },
        renderControllers: ["controller.render.minecart"]
    }
});
