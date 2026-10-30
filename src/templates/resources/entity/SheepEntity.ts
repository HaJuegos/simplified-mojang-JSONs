import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const SheepEntity = createRPEntityClient({
    idEntity: "minecraft:sheep",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: { default: "sheep" },
        textures: {
            default: "textures/entity/sheep/sheep",
            baby: "textures/entity/sheep/sheep_baby"
        },
        geometry: {
            default: "geometry.sheep.v1.8",
            sheared: "geometry.sheep.sheared.v1.8",
            baby: "geometry.sheep.baby"
        },
        animations: {
            setup: "animation.sheep.setup.v2",
            grazing: "animation.sheep.grazing.v2",
            walk: "animation.quadruped.walk",
            look_at_target: "animation.common.look_at_target",
            baby_transform: "animation.sheep.baby_transform",
            move: "controller.animation.sheep.move",
            baby_grazing: "animation.sheep.baby_grazing"
        },
        scripts: {
            animate: ["look_at_target", "move"],
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`
        },
        renderControllers: ["controller.render.sheep.v2"],
        spawnEgg: { texture: "spawn_egg_sheep" }
    }
});
