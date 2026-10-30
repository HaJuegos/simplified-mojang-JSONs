import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const HopperMinecartEntity = createRPEntityClient({
    idEntity: "minecraft:hopper_minecart",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: { default: "minecart" },
        textures: { default: "textures/entity/minecart" },
        geometry: { default: "geometry.minecart.v1.8" },
        scripts: {
            preAnimation: [`${MoLang.variable("hurt")} = ${MoLang.hurtTime()} - ${MoLang.frameAlpha()};`],
            animate: ["move"]
        },
        animations: { move: "animation.minecart.move" },
        renderControllers: ["controller.render.minecart"]
    }
});
