import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const BedEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:bed",
    params: {
        materials: {},
        renderControllers: [],
        textures: {
            default: "textures/entity/bed/white",
            white: "textures/entity/bed/white",
            orange: "textures/entity/bed/orange",
            magenta: "textures/entity/bed/magenta",
            light_blue: "textures/entity/bed/light_blue",
            yellow: "textures/entity/bed/yellow",
            lime: "textures/entity/bed/lime",
            pink: "textures/entity/bed/pink",
            gray: "textures/entity/bed/gray",
            silver: "textures/entity/bed/silver",
            cyan: "textures/entity/bed/cyan",
            purple: "textures/entity/bed/purple",
            blue: "textures/entity/bed/blue",
            brown: "textures/entity/bed/brown",
            green: "textures/entity/bed/green",
            red: "textures/entity/bed/red",
            black: "textures/entity/bed/black"
        },
        geometry: { default: "geometry.bed" }
    }
});
