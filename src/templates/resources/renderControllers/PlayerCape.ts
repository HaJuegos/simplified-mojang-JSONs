import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const PlayerCape = createRPRenderController({
    renderControllers: [
        {
            idRender: "player.cape",
            rebuildAnimationMatrices: true,
            geometry: "Geometry.cape",
            materials: [
                { "*": "Material.cape" }
            ],
            textures: ["Texture.cape"],
            partVisibility: [
                {
                    cape: `${MoLang.armorTextureSlot(1)} != 5 && (!variable.is_first_person || variable.is_paperdoll) && !variable.map_face_icon && !${MoLang.isSpectator()}`
                }
            ],
            isHurtColor: {
                r: 0.0,
                g: 0.0,
                b: 0.0,
                a: 0.0
            }
        }
    ]
});
