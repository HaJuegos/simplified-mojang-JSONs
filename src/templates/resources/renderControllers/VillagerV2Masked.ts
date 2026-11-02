import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @deprecated Ya no se usa oficialmente en el archivo. Usa la version 3° en su lugar.
 * @author HaJuegos - 31-10-2026
 */
export const VillagerV2Masked = createRPRenderController({
    renderControllers: [
        {
            idRender: "villager_v2_masked",
            arrays: {
                textures: {
                    "Array.biomes": [
                        "Texture.plains",
                        "Texture.desert",
                        "Texture.jungle",
                        "Texture.savanna",
                        "Texture.snow",
                        "Texture.swamp",
                        "Texture.taiga"
                    ],
                    "Array.professions": [
                        "Texture.unskilled",
                        "Texture.farmer",
                        "Texture.fisherman",
                        "Texture.shepherd",
                        "Texture.fletcher",
                        "Texture.librarian",
                        "Texture.cartographer",
                        "Texture.cleric",
                        "Texture.armorer",
                        "Texture.weapon_smith",
                        "Texture.tool_smith",
                        "Texture.butcher",
                        "Texture.leatherworker",
                        "Texture.stonemason",
                        "Texture.nitwit"
                    ]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": `(${MoLang.isBaby()} || variable.profession_index == 0) ? Material.default : Material.masked` }
            ],
            textures: [`Array.biomes[${MoLang.markVariant()}]`, "Array.professions[variable.profession_index]"]
        }
    ]
});
