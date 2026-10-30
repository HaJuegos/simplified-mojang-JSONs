import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const EvocationFangEntity = createRPEntityClient({
    idEntity: "minecraft:evocation_fang",
    params: {
        materials: { default: "fang" },
        textures: { default: "textures/entity/illager/fangs" },
        geometry: { default: "geometry.evocation_fang" },
        scripts: {
            preAnimation: [
                `${MoLang.variable("remaining_life")} = (${MoLang.lifeSpan()} - 2.0) - (${MoLang.lifeTime()} * 20.0);`,
                `variable.animation_progress = ${MoLang.lifeSpan()} == 0.0 ? 0.0 : (variable.remaining_life < 1.0 ? 1.0 : 1.0 - Math.min(1.0, variable.remaining_life / 20.0));`,
                "variable.bite_amount = (1 - Math.Pow(Math.Clamp(variable.animation_progress*2.0, 0, 1.0), 3.0)) * 0.35 * 180;",
                "variable.y_offset = (variable.animation_progress + Math.sin(variable.animation_progress*2.7*80.0)) * 0.6 * 12.0;"
            ],
            animate: ["bite"],
            scale: `${MoLang.variable("animation_progress")} > 0.9 ? (1.0 - ${MoLang.variable("animation_progress")}) / 0.1 : 1.0`
        },
        animations: { bite: "animation.evocation_fang.bite" },
        renderControllers: ["controller.render.evocation_fang"]
    }
});
