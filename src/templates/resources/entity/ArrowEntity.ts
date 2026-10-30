import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const ArrowEntity = createRPEntityClient({
    idEntity: "minecraft:arrow",
    params: {
        materials: { default: "arrow" },
        textures: { default: "textures/entity/arrows" },
        geometry: { default: "geometry.arrow" },
        animations: { move: "animation.arrow.move" },
        scripts: {
            preAnimation: [
                `${MoLang.variable("shake")} = ${MoLang.shakeTime()} - ${MoLang.frameAlpha()};`,
                "variable.shake_power = variable.shake > 0.0 ? -Math.sin(variable.shake * 200.0) * variable.shake : 0.0;"
            ],
            animate: ["move"]
        },
        renderControllers: ["controller.render.arrow"]
    }
});
