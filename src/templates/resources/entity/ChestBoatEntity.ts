import { createRPEntityClient } from "../../../builders/resources/entities/EntityTemplateBuilder";
import { FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";

/**
 * Plantilla vanilla del client entity para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 30-10-2026
 */
export const ChestBoatEntity = createRPEntityClient({
    formatVersion: FormatVersionListEntities.V1_8_0,
    idEntity: "minecraft:chest_boat",
    params: {
        materials: {},
        renderControllers: [],
        textures: {
            default: "textures/entity/boat/chest_boat_oak",
            oak: "textures/entity/boat/chest_boat_oak",
            spruce: "textures/entity/boat/chest_boat_spruce",
            birch: "textures/entity/boat/chest_boat_birch",
            jungle: "textures/entity/boat/chest_boat_jungle",
            acacia: "textures/entity/boat/chest_boat_acacia",
            darkoak: "textures/entity/boat/chest_boat_darkoak",
            mangrove: "textures/entity/boat/chest_boat_mangrove",
            bamboo: "textures/entity/boat/chest_boat_bamboo",
            cherry: "textures/entity/boat/chest_boat_cherry",
            paleoak: "textures/entity/boat/chest_boat_pale_oak",
            poplar: "textures/entity/boat/chest_boat_poplar"
        },
        geometry: { default: "geometry.chest_boat" }
    }
});
