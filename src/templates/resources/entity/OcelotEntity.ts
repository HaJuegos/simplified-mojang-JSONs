import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const OcelotEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:ocelot",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: { default: "ocelot" },
        textures: {
            black: "textures/entity/cat/blackcat",
            red: "textures/entity/cat/red",
            siamese: "textures/entity/cat/siamese",
            wild: "textures/entity/cat/ocelot",
            baby_wild: "textures/entity/cat/ocelot_baby"
        },
        geometry: {
            default: "geometry.ocelot.v1.8",
            baby: "geometry.cat.baby"
        },
        animations: {
            sneak: "animation.ocelot.sneak",
            walk: "animation.ocelot.walk",
            sprint: "animation.ocelot.sprint",
            sit: "animation.ocelot.sit",
            look_at_target: "animation.common.look_at_target",
            baby_transform: "animation.ocelot.baby_transform",
            baby_sit: "animation.cat.baby_sit",
            controller_move: "controller.animation.ocelot.move",
            controller_look_at_target: "controller.animation.ocelot.look_at_target"
        },
        renderControllers: ["controller.render.ocelot.v2"],
        spawnEgg: { texture: "spawn_egg_ocelot" },
        scripts: {
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`,
            animate: ["controller_move", "controller_look_at_target"]
        }
    }
});
