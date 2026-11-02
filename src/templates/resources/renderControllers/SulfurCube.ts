import { createRPRenderController } from "../../../builders/resources/renderControllers/RenderControllerTemplateBuilder";
import { MoLang } from "../../../utils/MoLang";

/**
 * Plantilla vanilla del render controller para la sobreescritura del mismo. Sus datos base ya están definidos.
 * @author HaJuegos - 31-10-2026
 */
export const SulfurCube = createRPRenderController({
    renderControllers: [
        {
            idRender: "sulfur_cube",
            geometry: `${MoLang.isBaby()} ? Geometry.small : Geometry.default`,
            materials: [
                { "*": "Material.default" }
            ],
            textures: [`${MoLang.isBaby()} ? Texture.small : (variable.has_absorbed_tnt ? Texture.tnt : Texture.default)`],
            partVisibility: [
                { "*": `(!variable.has_absorbed_block && !${MoLang.isInvisible()}) || variable.has_absorbed_tnt` }
            ],
            overlayColor: {
                r: "variable.is_flashing ? 1.0 : this",
                g: "variable.is_flashing ? 1.0 : this",
                b: "variable.is_flashing ? 1.0 : this",
                a: "variable.is_flashing ? 0.5 : this"
            }
        }
    ]
});
