import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const BoatEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:boat",
    params: {
        materials: {},
        renderControllers: [],
        textures: {
            default: "textures/entity/boat/boat_acacia",
            acacia: "textures/entity/boat/boat_acacia",
            birch: "textures/entity/boat/boat_birch",
            darkoak: "textures/entity/boat/boat_darkoak",
            jungle: "textures/entity/boat/boat_jungle",
            oak: "textures/entity/boat/boat_oak",
            spruce: "textures/entity/boat/boat_spruce",
            mangrove: "textures/entity/boat/mangrove_boat",
            bamboo: "textures/entity/boat/bamboo_raft",
            cherry: "textures/entity/boat/cherry_boat",
            paleoak: "textures/entity/boat/pale_oak_boat",
            poplar: "textures/entity/boat/poplar_boat"
        },
        geometry: { default: "geometry.boat" }
    }
});
