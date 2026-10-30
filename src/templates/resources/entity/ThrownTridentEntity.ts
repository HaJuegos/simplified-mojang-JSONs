import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const ThrownTridentEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:thrown_trident",
    params: {
        materials: {},
        renderControllers: [],
        textures: {
            default: "textures/entity/trident",
            loyalty_rope: "textures/entity/loyalty_rope"
        },
        geometry: { default: "geometry.trident" }
    }
});
