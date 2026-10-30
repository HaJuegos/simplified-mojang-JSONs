import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const FishingHookEntity = createRPEntityClient({
    idEntity: "minecraft:fishing_hook",
    params: {
        materials: { default: "fishing_hook" },
        textures: { default: "textures/entity/fishhook" },
        geometry: { default: "geometry.fishing_hook" },
        renderControllers: ["controller.render.fishing_hook"]
    }
});
