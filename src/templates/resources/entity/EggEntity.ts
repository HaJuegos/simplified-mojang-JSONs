import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const EggEntity = createRPEntityClient({
    idEntity: "minecraft:egg",
    params: {
        materials: { default: "egg" },
        textures: {
            default: "textures/items/egg",
            warm: "textures/items/brown_egg",
            cold: "textures/items/blue_egg"
        },
        geometry: { default: "geometry.item_sprite" },
        renderControllers: ["controller.render.egg"],
        animations: { flying: "animation.actor.billboard" },
        scripts: {
            animate: ["flying"],
            preAnimation: [
                `${MoLang.temp("variant")} = ${MoLang.property("minecraft:climate_variant")};`,
                `${MoLang.variable("index")} = (${MoLang.temp("variant")} == 'temperate') ? 0 : ((${MoLang.temp("variant")} == 'warm') ? 1 : 2);`
            ]
        }
    }
});
