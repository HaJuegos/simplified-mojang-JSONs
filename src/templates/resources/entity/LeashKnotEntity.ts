import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const LeashKnotEntity = createRPEntityClient({
    idEntity: "minecraft:leash_knot",
    params: {
        materials: { default: "leash_knot" },
        textures: { default: "textures/entity/lead_knot" },
        geometry: { default: "geometry.leash_knot" },
        renderControllers: ["controller.render.leash_knot"]
    }
});
