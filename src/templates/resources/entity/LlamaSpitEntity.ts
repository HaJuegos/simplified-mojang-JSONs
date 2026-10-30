import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const LlamaSpitEntity = createRPEntityClient({
    idEntity: "minecraft:llama_spit",
    params: {
        materials: { default: "llama_spit" },
        textures: { default: "textures/entity/llama/spit" },
        geometry: { default: "geometry.llamaspit" },
        animations: { setup: "animation.llama_spit.setup" },
        scripts: {
            animate: ["setup"]
        },
        renderControllers: ["controller.render.llama_spit"]
    }
});
