import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const HorseV4 = createRPRenderController({
    renderControllers: [
        {
            idRender: "horse.v4",
            partVisibility: [
                { Saddle: `${MoLang.isSaddled()}` },
                { "Bit*": `${MoLang.isSaddled()}` },
                { Bridle: `${MoLang.isSaddled()}` },
                { "Reins*": `${MoLang.isSaddled()} && ${MoLang.hasRider()}` },
                { "Bag*": false },
                { "MuleEar*": false }
            ],
            arrays: {
                textures: {
                    "Array.base": [
                        "Texture.base_white",
                        "Texture.base_creamy",
                        "Texture.base_chestnut",
                        "Texture.base_brown",
                        "Texture.base_black",
                        "Texture.base_gray",
                        "Texture.base_darkbrown"
                    ],
                    "Array.markings": [
                        "Texture.markings_none",
                        "Texture.markings_white",
                        "Texture.markings_whitefield",
                        "Texture.markings_whitedots",
                        "Texture.markings_blackdots"
                    ],
                    "Array.armor": [
                        "Texture.armor_none",
                        "Texture.armor_leather",
                        "Texture.armor_iron",
                        "Texture.armor_gold",
                        "Texture.armor_diamond",
                        "Texture.armor_copper",
                        "Texture.armor_netherite"
                    ],
                    "Array.babyBase": [
                        "Texture.baby_base_white",
                        "Texture.baby_base_creamy",
                        "Texture.baby_base_chestnut",
                        "Texture.baby_base_brown",
                        "Texture.baby_base_black",
                        "Texture.baby_base_gray",
                        "Texture.baby_base_darkbrown"
                    ],
                    "Array.babyMarkings": [
                        "Texture.markings_none",
                        "Texture.baby_markings_white",
                        "Texture.baby_markings_whitefield",
                        "Texture.baby_markings_whitedots",
                        "Texture.baby_markings_blackdots"
                    ]
                }
            },
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Geometry.default`,
            materials: [
                { "*": "Material.default" }
            ],
            textures: [
                `${MoLang.isBaby()} ? Array.baby_base[${MoLang.variant()}] : Array.base[${MoLang.variant()}]`,
                `${MoLang.isBaby()} ? Array.baby_markings[${MoLang.markVariant()}] : Array.markings[${MoLang.markVariant()}]`,
                `${MoLang.isBaby()} ? Texture.armor_none : Array.armor[variable.armor_texture_slot]`
            ],
            color: {
                r: `variable.armor_texture_slot ? ${MoLang.armorColorSlot(4, 0)} : this`,
                g: `variable.armor_texture_slot ? ${MoLang.armorColorSlot(4, 1)} : this`,
                b: `variable.armor_texture_slot ? ${MoLang.armorColorSlot(4, 2)} : this`,
                a: `variable.armor_texture_slot ? ${MoLang.armorColorSlot(4, 3)} : this`
            }
        }
    ]
});
