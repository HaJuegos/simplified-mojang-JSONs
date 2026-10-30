import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const SkullEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:skull",
    params: {
        materials: {},
        renderControllers: [],
        textures: {
            default: "textures/entity/steve",
            steve: "textures/entity/steve",
            skeleton: "textures/entity/skulls/skeleton",
            wither: "textures/entity/skulls/wither_skeleton",
            zombie: "textures/entity/skulls/zombie",
            creeper: "textures/entity/skulls/creeper",
            dragon: "textures/entity/dragon/dragon",
            piglin: "textures/entity/piglin/piglin"
        },
        geometry: {
            default: "geometry.player_head",
            steve: "geometry.player_head",
            skeleton: "geometry.mob_head",
            wither: "geometry.mob_head",
            zombie: "geometry.mob_head",
            creeper: "geometry.mob_head",
            dragon: "geometry.dragon_head",
            piglin: "geometry.piglin"
        }
    }
});
