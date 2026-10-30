import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const LlamaEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:llama",
    params: {
        minEngineVersion: FormatVersionListEntities.V1_8_0,
        materials: { default: "llama" },
        textures: {
            creamy: "textures/entity/llama/llama_creamy",
            white: "textures/entity/llama/llama_white",
            brown: "textures/entity/llama/llama_brown",
            gray: "textures/entity/llama/llama_gray",
            decor_none: "textures/entity/llama/decor/decor_none",
            decor_white: "textures/entity/llama/decor/decor_white",
            decor_orange: "textures/entity/llama/decor/decor_orange",
            decor_magenta: "textures/entity/llama/decor/decor_magenta",
            decor_light_blue: "textures/entity/llama/decor/decor_light_blue",
            decor_yellow: "textures/entity/llama/decor/decor_yellow",
            decor_lime: "textures/entity/llama/decor/decor_lime",
            decor_pink: "textures/entity/llama/decor/decor_pink",
            decor_gray: "textures/entity/llama/decor/decor_gray",
            decor_silver: "textures/entity/llama/decor/decor_silver",
            decor_cyan: "textures/entity/llama/decor/decor_cyan",
            decor_purple: "textures/entity/llama/decor/decor_purple",
            decor_blue: "textures/entity/llama/decor/decor_blue",
            decor_brown: "textures/entity/llama/decor/decor_brown",
            decor_green: "textures/entity/llama/decor/decor_green",
            decor_red: "textures/entity/llama/decor/decor_red",
            decor_black: "textures/entity/llama/decor/decor_black",
            decor_wandering_trader: "textures/entity/llama/decor/trader_llama_decor",
            baby_creamy: "textures/entity/llama/llama_creamy_baby",
            baby_white: "textures/entity/llama/llama_white_baby",
            baby_brown: "textures/entity/llama/llama_brown_baby",
            baby_gray: "textures/entity/llama/llama_gray_baby",
            baby_decor_wandering_trader: "textures/entity/llama/trader_llama_baby"
        },
        geometry: {
            default: "geometry.llama.v1.8",
            baby: "geometry.llama.baby"
        },
        animations: {
            setup: "animation.llama.setup",
            walk: "animation.quadruped.walk",
            look_at_target: "animation.common.look_at_target",
            baby_transform: "animation.llama.baby_transform",
            controller_move: "controller.animation.llama.move"
        },
        renderControllers: ["controller.render.llama.v2"],
        spawnEgg: { texture: "spawn_egg_llama" },
        scripts: {
            scale: `${MoLang.isBaby()} ? 2.0 : 1.0`,
            animate: ["controller_move"]
        }
    }
});
