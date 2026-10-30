import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const WanderingTraderEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:wandering_trader",
    params: {
        materials: { default: "wandering_trader" },
        textures: { default: "textures/entity/wandering_trader" },
        geometry: { default: "geometry.villager_v2" },
        scripts: {
            scale: "0.9375",
            animate: ["controller_general", "controller_raise_arms", "controller_move"]
        },
        animations: {
            general: "animation.villager.general",
            look_at_target: "animation.common.look_at_target",
            raise_arms: "animation.villager.raise_arms",
            move: "animation.villager.move",
            controller_general: "controller.animation.villager.general",
            controller_raise_arms: "controller.animation.villager_v2.raise_arms",
            controller_move: "controller.animation.villager.move"
        },
        renderControllers: ["controller.render.wandering_trader"],
        spawnEgg: { texture: "spawn_egg_wandering_trader" }
    }
});
