import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa en la actualidad, se deja por compatibilidad. Usa la version mas reciente.
 * @author HaJuegos - 30-10-2026
 */
export const LlamaV1Entity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:llama",
    params: {
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
            decor_wandering_trader: "textures/entity/llama/decor/trader_llama_decor"
        },
        geometry: { default: "geometry.llama" },
        animations: {
            setup: "animation.llama.setup.v1.0",
            walk: "animation.quadruped.walk",
            look_at_target: "animation.common.look_at_target",
            baby_transform: "animation.llama.baby_transform.v1.0",
            controller_move: "controller.animation.llama.move",
            controller_baby: "controller.animation.llama.baby"
        },
        renderControllers: ["controller.render.llama"],
        spawnEgg: {
            texture: "spawn_egg",
            textureIndex: 38
        },
        scripts: {
            animate: ["controller_move", "controller_baby"]
        }
    }
});
