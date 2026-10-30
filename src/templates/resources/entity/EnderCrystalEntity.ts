import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const EnderCrystalEntity = createRPEntityClient({
    idEntity: "minecraft:ender_crystal",
    params: {
        materials: { default: "ender_crystal" },
        textures: {
            default: "textures/entity/endercrystal/endercrystal",
            beam: "textures/entity/endercrystal/endercrystal_beam"
        },
        geometry: { default: "geometry.ender_crystal" },
        animations: { move: "animation.ender_crystal.move" },
        scripts: {
            initialize: ["variable.time_offset = Math.random(0, 100000);"],
            animate: ["move"],
            shouldUpdateEffectsOffscreen: "1.0"
        },
        renderControllers: ["controller.render.ender_crystal"]
    }
});
