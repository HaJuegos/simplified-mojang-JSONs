import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const BatEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:bat",
    params: {
        materials: { default: "bat_v2" },
        textures: { default: "textures/entity/bat_v2" },
        geometry: { default: "geometry.bat_v2" },
        scripts: {
            scale: "1.0",
            animate: ["controller_move"]
        },
        animations: {
            resting: "animation.bat.resting",
            flying: "animation.bat.flying",
            controller_move: "controller.animation.bat.move"
        },
        renderControllers: ["controller.render.bat"],
        spawnEgg: { texture: "spawn_egg_bat" }
    }
});
