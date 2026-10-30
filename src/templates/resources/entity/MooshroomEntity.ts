import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const MooshroomEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:mooshroom",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: { default: "mooshroom" },
        textures: {
            default: "textures/entity/cow/mooshroom_v2",
            brown: "textures/entity/cow/brown_mooshroom_v2",
            baby_default: "textures/entity/cow/mooshroom_red_baby",
            baby_brown: "textures/entity/cow/mooshroom_brown_baby"
        },
        geometry: {
            default: "geometry.mooshroom.v2",
            baby: "geometry.cow.baby"
        },
        animations: {
            setup: "animation.mooshroom.setup",
            walk: "animation.quadruped.walk",
            look_at_target: "animation.common.look_at_target",
            baby_transform: "animation.mooshroom.baby_transform",
            controller_setup: "controller.animation.mooshroom.setup",
            controller_move: "controller.animation.mooshroom.move"
        },
        renderControllers: ["controller.render.mooshroom.v2"],
        spawnEgg: { texture: "spawn_egg_mooshroom" },
        scripts: {
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`,
            animate: ["controller_setup", "controller_move"]
        }
    }
});
