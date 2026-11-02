import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const ZombieHorseV4 = createRPRenderController({
    renderControllers: [
        {
            idRender: "zombie_horse.v4",
            partVisibility: [
                { Saddle: `${MoLang.isSaddled()}` },
                { "Bit*": `${MoLang.isSaddled()}` },
                { Bridle: `${MoLang.isSaddled()}` },
                { "Reins*": `${MoLang.isSaddled()} && ${MoLang.hasRider()}` },
                { "Bag*": false },
                { "MuleEar*": false }
            ],
            geometry: `${MoLang.isBaby()} ? Geometry.baby : Geometry.default`,
            materials: [
                { "*": "Material.default" }
            ],
            arrays: {
                textures: {
                    "Array.armor": [
                        "Texture.armor_none",
                        "Texture.armor_leather",
                        "Texture.armor_iron",
                        "Texture.armor_gold",
                        "Texture.armor_diamond",
                        "Texture.armor_copper",
                        "Texture.armor_netherite"
                    ]
                }
            },
            textures: [
                `${MoLang.isBaby()} ? Texture.baby_zombie : Texture.zombie`,
                "Texture.markings_none",
                "Array.armor[variable.armor_texture_slot]"
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
