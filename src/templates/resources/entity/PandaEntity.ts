import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const PandaEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:panda",
    params: {
        materials: { default: "panda" },
        textures: {
            default: "textures/entity/panda/panda",
            lazy: "textures/entity/panda/panda_lazy",
            worried: "textures/entity/panda/panda_worried",
            playful: "textures/entity/panda/panda_playful",
            brown: "textures/entity/panda/panda_brown",
            weak: "textures/entity/panda/panda_sneezy",
            aggressive: "textures/entity/panda/panda_aggressive",
            baby_default: "textures/entity/panda/panda_baby",
            baby_lazy: "textures/entity/panda/panda_lazy_baby",
            baby_worried: "textures/entity/panda/panda_worried_baby",
            baby_playful: "textures/entity/panda/panda_playful_baby",
            baby_brown: "textures/entity/panda/panda_brown_baby",
            baby_weak: "textures/entity/panda/panda_weak_baby",
            baby_aggressive: "textures/entity/panda/panda_aggressive_baby"
        },
        geometry: {
            default: "geometry.panda",
            baby: "geometry.panda.baby"
        },
        animations: {
            unhappy: "animation.panda.unhappy",
            sneezing: "animation.panda.sneezing",
            walk: "animation.quadruped.walk",
            look_at_target: "animation.common.look_at_target",
            baby_transform: "animation.panda.baby_transform",
            sitting: "animation.panda.sitting",
            rolling: "animation.panda.rolling",
            lying: "animation.panda.lying",
            baby_sitting: "animation.panda.baby_sitting",
            baby_rolling: "animation.panda.baby_rolling",
            baby_lying: "animation.panda.baby_lying",
            controller_move: "controller.animation.panda.move",
            controller_unhappy: "controller.animation.panda.unhappy",
            controller_sneezing: "controller.animation.panda.sneezing"
        },
        renderControllers: ["controller.render.panda.v2"],
        spawnEgg: { texture: "spawn_egg_panda" },
        scripts: {
            scale: `${MoLang.isBaby()} ? (1 / 0.4) : 1.0`,
            animate: ["controller_move", "controller_unhappy", "controller_sneezing"]
        }
    }
});
