import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const DolphinEntity = createRPEntityClient({
    idEntity: "minecraft:dolphin",
    params: {
        materials: { default: "dolphin" },
        textures: {
            default: "textures/entity/dolphin",
            baby: "textures/entity/dolphin/dolphin_baby"
        },
        geometry: {
            default: "geometry.dolphin",
            baby: "geometry.dolphin.baby"
        },
        animations: {
            move: "animation.dolphin.move",
            move_controller: "controller.animation.dolphin.general"
        },
        scripts: {
            animate: ["move_controller"],
            scale: `${MoLang.isBaby()} ? (1 / 0.65) : 1.0`
        },
        particleEffects: { dolphin_move_particle: "minecraft:dolphin_move_particle" },
        renderControllers: ["controller.render.dolphin.v2"],
        spawnEgg: { texture: "spawn_egg_dolphin" }
    }
});
