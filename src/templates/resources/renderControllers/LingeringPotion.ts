import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const LingeringPotion = createRPRenderController({
    renderControllers: [
        {
            idRender: "lingering_potion",
            arrays: {
                textures: {
                    "Array.skins": [
                        "Texture.moveSlowdown",
                        "Texture.moveSpeed",
                        "Texture.digSlowdown",
                        "Texture.digSpeed",
                        "Texture.damageBoost",
                        "Texture.heal",
                        "Texture.harm",
                        "Texture.jump",
                        "Texture.confusion",
                        "Texture.regeneration",
                        "Texture.resistance",
                        "Texture.fireResistance",
                        "Texture.waterBreathing",
                        "Texture.invisibility",
                        "Texture.blindness",
                        "Texture.nightVision",
                        "Texture.hunger",
                        "Texture.weakness",
                        "Texture.poison",
                        "Texture.wither",
                        "Texture.healthBoost",
                        "Texture.absorption",
                        "Texture.saturation",
                        "Texture.levitation",
                        "Texture.turtleMaster",
                        "Texture.slowFall",
                        "Texture.windCharged",
                        "Texture.weaving",
                        "Texture.oozing",
                        "Texture.infested",
                        "Texture.default"
                    ]
                }
            },
            geometry: "Geometry.default",
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`Array.skins[${MoLang.variant()}]`, "Texture.enchanted"],
            filterLighting: true
        }
    ]
});
