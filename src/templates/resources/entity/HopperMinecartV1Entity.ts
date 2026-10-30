import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const HopperMinecartV1Entity = createRPEntityClient({
    idEntity: "minecraft:hopper_minecart",
    params: {
        materials: { default: "minecart" },
        textures: { default: "textures/entity/minecart" },
        geometry: { default: "geometry.minecart" },
        scripts: {
            preAnimation: [`${MoLang.variable("hurt")} = ${MoLang.hurtTime()} - ${MoLang.frameAlpha()};`],
            animate: ["move"]
        },
        animations: { move: "animation.minecart.move.v1.0" },
        renderControllers: ["controller.render.minecart"]
    }
});
