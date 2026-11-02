import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ZombieVillagerV3Masked = createRPRenderController({
    renderControllers: [
        {
            idRender: "zombie_villager_v3_masked",
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
                    "Array.babyBiomes": [
                        "Texture.baby_plains",
                        "Texture.baby_desert",
                        "Texture.baby_jungle",
                        "Texture.baby_savanna",
                        "Texture.baby_snow",
                        "Texture.baby_swamp",
                        "Texture.baby_taiga"
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
            geometry: `${MoLang.isBaby()}? Geometry.baby: Geometry.default`,
            materials: [
                { "*": `${MoLang.isBaby()} ? Material.default : Material.masked` }
            ],
            textures: [
                `${MoLang.isBaby()} ? Array.baby_biomes[${MoLang.markVariant()}] : Array.biomes[${MoLang.markVariant()}]`,
                "Array.professions[variable.profession_index]"
            ]
        }
    ]
});
