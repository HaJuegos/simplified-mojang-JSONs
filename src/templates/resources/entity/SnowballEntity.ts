import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const SnowballEntity = createRPEntityClient({
    idEntity: "minecraft:snowball",
    params: {
        materials: { default: "snowball" },
        textures: { default: "textures/items/snowball" },
        geometry: { default: "geometry.item_sprite" },
        renderControllers: ["controller.render.item_sprite"],
        animations: { flying: "animation.actor.billboard" },
        scripts: {
            animate: ["flying"]
        }
    }
});
